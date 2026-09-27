import { NextResponse } from "next/server";
import validateSignUpData from "./validateSignUpData";

interface IDetails {
    firstName: string;
    lastName: string;
    gmail: string;
    password: string;

    termsAccepted: boolean;
}
export async function POST() {
    try {

        const Data = await req.json()
        const { firstName, lastName, gmail, password, termsAccepted }: IDetails = Data;

        validateSignUpData(Data);
        return NextResponse.json(
            {
                success: true,
                user: `${firstName} ${lastName}`,
                email: gmail,
                message: "Validation successful!"
            },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid request body",
            },
            { status: 400 }
        );
    }
}


