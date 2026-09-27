"use client";

import { use, useState } from "react";

import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "./loader";
interface AuthFormProps {
  mode: "signin" | "signup";
}
// Simple Google SVG Icon
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

// Simple Github SVG Icon
const GithubIcon = () => (
  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);


export default function AuthForm({ mode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isSignUp = mode === "signup";
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const continueSignin = async () => {
    setLoading(true);
    setError("");

    try {

      if (firstName.length <= 3 || lastName.length <= 3) {
        throw new Error("Enter the valid name")
      }

      if (!email.trim()) {
        throw new Error("Email is required.");
      }

      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters.");
      }
      const Data = await axios.post("/api/authentication/users/signup",
        {
          firstName: firstName,
          lastName: lastName,
          email: email.trim(),
          password: password,
        }
      );
      if (Data.data.success) {


        navigate.push("/dashboard");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        "Unable to sign in. Please try again."
      );
    }


  }
  const continueSignup = async () => {
    setLoading(true);
    setError("");

    try {

      if (firstName.length <= 3 || lastName.length <= 3) {
        throw new Error("Enter the valid name")
      }

      if (!email.trim()) {
        throw new Error("Email is required.");
      }

      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters.");
      }
      const Data = await axios.post("/api/authentication/users/signup",
        {
          firstName: firstName,
          lastName: lastName,
          email: email.trim(),
          password: password,
        }
      );
      if (Data.data.success) {


        navigate.push("/dashboard");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        "Unable to sign in. Please try again."
      );
    }


  }
  return (
    <div className="flex w-full h-full flex-col items-center justify-center px-8 sm:px-12 lg:px-20 xl:px-24 ">
      <div className="w-full flex flex-col items-center   px-8 sm:px-12 lg:px-20 xl:px-24  xl:py-24">
        {/* Header */}
        <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">
          {isSignUp ? "Sign Up Account" : "Welcome Back"}
        </h1>
        <p className="text-[#a1a1aa] text-sm mb-8 text-center">
          {isSignUp
            ? "Enter your personal data to create your account."
            : "Please enter your details to sign in."}
        </p>

        {/* Social Auth */}
        <div className="flex w-full gap-4 mb-6">
          <button className="flex-1 cursor-pointer flex items-center justify-center gap-2 py-3 rounded-xl bg-[#111111] border border-[#27272a] hover:bg-[#18181b] transition-colors text-white font-semibold text-sm">
            <GoogleIcon />
            Google
          </button>
          <button className="flex-1 cursor-pointer flex items-center justify-center gap-2 py-3 rounded-xl bg-[#111111] border border-[#27272a] hover:bg-[#18181b] transition-colors text-white font-semibold text-sm">
            <GithubIcon />
            Github
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full gap-4 mb-6">
          <div className="h-[1px] flex-1 bg-[#27272a]"></div>
          <span className="text-[#a1a1aa] text-sm font-medium">Or</span>
          <div className="h-[1px] flex-1 bg-[#27272a]"></div>
        </div>

        {/* Form */}
        <form className="w-full flex flex-col gap-5">
          {isSignUp && (
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-black text-sm font-medium ml-1">First Name</label>
                <input
                  type="text"
                  placeholder="e.g. John"
                  onChange={e => setFirstName(e.target.value)}
                  className="w-full bg-[#111111] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 transition-all placeholder:text-[#52525b] border border-transparent focus:border-[#27272a]"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-black text-sm font-medium ml-1">Last Name</label>
                <input
                  type="text"
                  placeholder="e.g. Francisco"
                  onChange={e => setLastName(e.target.value)}
                  className="w-full bg-[#111111] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 transition-all placeholder:text-[#52525b] border border-transparent focus:border-[#27272a]"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-medium ml-1">Email</label>
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder={isSignUp ? "e.g. johnfrans@gmail.com" : "Enter your email"}
              className="w-full bg-[#111111] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 transition-all placeholder:text-[#52525b] border border-transparent focus:border-[#27272a]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-medium ml-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-[#111111] text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 transition-all placeholder:text-[#52525b] border border-transparent focus:border-[#27272a] pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#71717a] hover:text-black transition-colors"
              >
                {showPassword ? <Eye className="w-[18px] h-[18px]" /> : <EyeOff className="w-[18px] h-[18px]" />}
              </button>
            </div>
            {isSignUp ? (
              <p className="text-[#a1a1aa] text-xs mt-0.5 ml-1">Must be at least 8 characters.</p>
            ) : (
              <span onClick={() => navigate.push("/auth/forgot-password")} className="text-black text-xs font-medium self-end mt-0.5 hover:underline mr-1">
                Forgot password?
              </span>
            )}
          </div>

          <button

            onSubmit={(e) => {
              e.preventDefault();
              if (isSignUp) {
                continueSignup();
              } else {
                continueSignin();
              }
            }}
            type="button"
            className="w-[50%] self-center bg-gray-200 text-black font-bold rounded-xl py-3.5 mt-4 hover:bg-gray-300 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            {loading ? <Loader /> : isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-[#a1a1aa] text-sm mt-8">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span
            onClick={() => navigate.push(isSignUp ? "/auth/signin" : "/auth/signup")}
            className="text-black font-bold hover:underline"
          >
            {isSignUp ? "Log in" : "Sign up"}
          </span>
        </p>
      </div>
    </div >
  );
}
