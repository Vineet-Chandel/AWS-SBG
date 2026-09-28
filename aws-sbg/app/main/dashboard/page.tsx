"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LogOut, User, Mail, Calendar, Key, ShieldCheck } from "lucide-react";
import Loader from "@/components/Loader";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/authentication/user/me");
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          router.push("/auth/signin");
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
        router.push("/auth/signin");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      await axios.post("/api/authentication/user/logout");
      router.push("/auth/signin");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) {
    return (
      <div className="flex w-full min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-white">
        <div className="h-16 w-16">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center py-16 px-4 sm:px-8 lg:px-20 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12 relative overflow-hidden">

        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6 relative z-10">
          <div>
            <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">
              Dashboard
            </h1>
            <p className="text-[#a1a1aa] text-sm">
              Welcome back, {user?.firstname || "User"}!
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111111] hover:bg-[#18181b] border border-[#27272a] transition-all text-white font-semibold text-sm shadow-md"
          >
            <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Sign Out
          </button>
        </div>

        {/* Profile Details (Styled like AuthForm inputs) */}
        <div className="w-full flex flex-col gap-6 relative z-10">

          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-sm font-medium ml-1 flex items-center gap-2">
                <User className="w-4 h-4 text-[#a1a1aa]" /> First Name
              </label>
              <div className="w-full bg-[#111111] text-white rounded-xl px-4 py-3.5 text-sm border border-[#27272a]">
                {user?.firstname || "N/A"}
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-sm font-medium ml-1 flex items-center gap-2">
                <User className="w-4 h-4 text-[#a1a1aa]" /> Last Name
              </label>
              <div className="w-full bg-[#111111] text-white rounded-xl px-4 py-3.5 text-sm border border-[#27272a]">
                {user?.lastname || "N/A"}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-medium ml-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#a1a1aa]" /> Email Address
            </label>
            <div className="w-full bg-[#111111] text-white rounded-xl px-4 py-3.5 text-sm border border-[#27272a]">
              {user?.gmail || "N/A"}
            </div>
          </div>

          <div className="flex gap-4 flex-col sm:flex-row mt-2">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-sm font-medium ml-1 flex items-center gap-2">
                <Key className="w-4 h-4 text-[#a1a1aa]" /> User ID
              </label>
              <div className="w-full bg-[#f4f4f5] text-black font-semibold rounded-xl px-4 py-3.5 text-sm border border-gray-200 font-mono tracking-wider">
                #{user?.id ? user.id.toString().padStart(5, '0') : "00000"}
              </div>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black text-sm font-medium ml-1 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#a1a1aa]" /> Member Since
              </label>
              <div className="w-full bg-[#f4f4f5] text-black font-medium rounded-xl px-4 py-3.5 text-sm border border-gray-200">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                }) : "N/A"}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex items-center gap-3 relative z-10">
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-green-600" />
          </div>
          <p className="text-[#a1a1aa] text-xs leading-relaxed">
            Your session is securely protected by Next.js Edge Middleware and HTTP-only JWT cookies.
          </p>
        </div>
      </div>
    </div>
  );
}
