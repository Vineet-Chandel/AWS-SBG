import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = process.env.JWT_SECRET;

if (!secret) {
    throw new Error("JWT_SECRET is not configured.");
}

const key = new TextEncoder().encode(secret);

const COOKIE_NAME = "auth_token";
const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 days

export async function createSession(userId: number, email: string) {
    const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION;

    const token = await new SignJWT({
        userId,
        email,
    })
        .setProtectedHeader({
            alg: "HS256",
        })
        .setIssuedAt()
        .setExpirationTime(expiresAt)
        .setIssuer("your-app")
        .setAudience("your-app-users")
        .sign(key);

    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: SESSION_DURATION,
        path: "/",
    });
}

export async function getSession() {
    const cookieStore = await cookies();

    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
        return null;
    }

    try {
        const { payload } = await jwtVerify(token, key, {
            algorithms: ["HS256"],
            issuer: "your-app",
            audience: "your-app-users",
        });

        return {
            userId: Number(payload.userId),
            email: String(payload.email),
        };
    } catch {
        return null;
    }
}

export async function deleteSession() {
    const cookieStore = await cookies();

    cookieStore.delete(COOKIE_NAME);
}