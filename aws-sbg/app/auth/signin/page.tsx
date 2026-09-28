import Right from "../right";
import AuthForm from "../AuthForm";
import { ToastProvider } from "@/components/ToastProvider";

export default function SignInPage() {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col justify-between lg:flex-row overflow-hidden text-white font-sans">
            {/* Auth form – full width on mobile, left half on desktop */}
            <div className="w-full lg:w-[55%] xl:w-[50%] h-[100svh] lg:h-screen relative order-1">
                <ToastProvider position="absolute">
                    <AuthForm mode="signin" />
                </ToastProvider>
            </div>
            {/* Right banner – hidden on small screens, visible on lg+ */}
            <div className="hidden lg:block lg:w-[40%] xl:w-[45%] h-screen border-[15px] border-black order-2">
                <div className="h-full relative">
                    <Right trigger={true} />
                </div>
            </div>
        </div>
    )
}