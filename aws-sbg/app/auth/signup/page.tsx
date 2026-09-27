import Right from "../right";
import AuthForm from "../AuthForm";

export default function SignUpPage() {
    return (
        <div className="h-screen w-full bg-white flex justify-between overflow-hidden text-white font-sans">
            <div className="w-[50%] h-full relative">
                <AuthForm mode="signup" />
            </div>
            <div className=" h-full border-[15px] border-black">
                <div className="w-full h-full relative">
                    <Right trigger={false} />
                </div>
            </div>
        </div>
    )
}