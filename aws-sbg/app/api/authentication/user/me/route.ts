import { NextResponse } from "next/server";
import { getSession } from "@/lib/Auth/session";
import pool from "@/lib/client";

export async function GET() {
    try {
        const session = await getSession();
        
        if (!session) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        const userResult = await pool.query(
            "SELECT id, firstName, lastName, gmail, termsAccepted, created_at FROM users WHERE id = $1",
            [session.userId]
        );

        if (userResult.rows.length === 0) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, user: userResult.rows[0] }, { status: 200 });
    } catch (err) {
        console.error("ME API ERROR:", err);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
