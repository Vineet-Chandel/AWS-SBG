import pool from "@/lib/client";
import { NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/Auth/session";

export async function POST(req: Request) {
    try {
        const Data = await req.json();

        if (!Data || typeof Data !== "object") {
            return NextResponse.json(
                { success: false, message: "Invalid request body." },
                { status: 400 }
            );
        }

        const { gmail, password } = Data;

        if (typeof gmail !== "string" || typeof password !== "string") {
            return NextResponse.json(
                { success: false, message: "Email and password must be provided." },
                { status: 400 }
            );
        }

        const normalizedEmail = gmail.trim().toLowerCase();

        if (!validator.isEmail(normalizedEmail)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please provide a valid email address."
                },
                { status: 400 }
            );
        }

        const is_user = await pool.query(
            "SELECT id, firstName, lastName, gmail, password, termsAccepted FROM users WHERE gmail = $1",
            [normalizedEmail]
        );

        if (is_user.rows.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email or password."
                },
                { status: 401 }
            );
        }

        const user = is_user.rows[0];

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid email or password."
                },
                { status: 401 }
            );
        }
        await createSession(user.id, user.gmail);
        // Do not return password in the response
        const { password: _, ...safeUser } = user;

        return NextResponse.json(
            {
                success: true,
                message: "Signed in successfully.",
                user: safeUser
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("SIGNIN ERROR:", err);
        return NextResponse.json(
            {
                success: false,
                message: err instanceof Error ? err.message : "Something went wrong"
            },
            { status: 500 }
        );
    }
}
