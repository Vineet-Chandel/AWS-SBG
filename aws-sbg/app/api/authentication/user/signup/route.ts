import { NextResponse } from "next/server";
import validateSignUpData from "./validateSignUpData";
import pool from "@/lib/Neon/client";
import bcrypt from "bcrypt";

interface IDetails {
    firstName: string;
    lastName: string;
    gmail: string;
    password: string;

    termsAccepted: boolean;
}
export async function POST(req: Request) {
    try {

        const Data: unknown = await req.json();
        const NormalizedData = validateSignUpData(Data);

        const {
            firstName,
            lastName,
            gmail,
            password,
            termsAccepted,
        } = NormalizedData;
        const existingGmailUser = await pool.query(
            `SELECT id, gmail FROM users WHERE gmail = $1`,
            [gmail]
        );
        if (existingGmailUser.rows.length > 0) {
            return NextResponse.json(

                {
                    success: false,
                    message: "Email is already registered"
                }
            )
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await pool.query(
            `
            INSERT INTO USERS ( firstName, lastName, gmail, password, termsAccepted)
            VALUES ($1, $2, $3, $4 ,$5)
            RETURNING id, firstName, lastName, gmail, termsAccepted, created_at
            `,
            [
                firstName,
                lastName,
                gmail,
                passwordHash,
                termsAccepted
            ]
        )

        return NextResponse.json(
            {
                success: true,
                message: "User created successfully.",
                user: newUser.rows[0],
            },
            { status: 201 }
        );
    } catch (err) {
        console.error("SIGNUP ERROR:", err);

        return NextResponse.json(
            {
                success: false,
                message: err instanceof Error
                    ? err.message
                    : "Something went wrong",
            },
            { status: 500 }
        );
    }
}


