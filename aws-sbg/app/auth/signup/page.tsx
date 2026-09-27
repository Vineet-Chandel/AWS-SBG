import Right from "../right";
import AuthForm from "../AuthForm";

export default function SignUpPage() {
    return (
        <div className="min-h-screen w-full bg-white flex justify-between flex-col lg:flex-row overflow-hidden text-white font-sans">
            {/* Auth form – full width on mobile, left half on desktop */}
            <div className="w-full lg:w-[55%] xl:w-[50%] h-[100svh] lg:h-screen relative order-1">
                <AuthForm mode="signup" />
            </div>
            {/* Right banner – hidden on small screens, visible on lg+ */}
            <div className="hidden lg:block lg:w-[40%] xl:w-[45%] h-screen border-[15px] border-black order-2">
                <div className="w-full h-full relative">
                    <Right trigger={false} />
                </div>
            </div>
        </div>
    )
}