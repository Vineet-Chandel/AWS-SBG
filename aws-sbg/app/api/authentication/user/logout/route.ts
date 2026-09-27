import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/Auth/session";

export async function POST() {
    try {
        await deleteSession();
        return NextResponse.json({ success: true, message: "Logged out successfully" }, { status: 200 });
    } catch (err) {
        console.error("LOGOUT ERROR:", err);
        return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 });
    }
}
