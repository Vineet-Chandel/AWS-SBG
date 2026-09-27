import Right from "../right";
import AuthForm from "../AuthForm";

export default function SignInPage() {
    return (
        <div className="h-screen w-full bg-white flex justify-between overflow-hidden text-white font-sans">
            <div className="w-[60%] h-full relative">
                <AuthForm mode="signin" />
            </div>
            <div className=" h-full border-[15px] border-black">
                <div className="w-full h-full relative">
                    <Right trigger={true} />
                </div>
            </div>
        </div>
    )
}