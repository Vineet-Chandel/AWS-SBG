"use client";

import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  Code2,
  BarChart3,
  Target,
  Server,
  Workflow,
  HeadphonesIcon,
  PieChart,
  DollarSign,
  Users2,
  Settings,
  LineChart,
  ClipboardList,
  Cloud,
  Bell,
  Blocks
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
    <div className="relative flex items-center justify-center w-8 h-8">
      {/* Abstract logo similar to LinearB */}
      <svg viewBox="0 0 100 100" className="w-full h-full text-black">
        <circle cx="20" cy="50" r="10" fill="currentColor" />
        <circle cx="50" cy="20" r="10" fill="currentColor" />
        <circle cx="50" cy="80" r="10" fill="currentColor" />
        <circle cx="80" cy="50" r="10" fill="currentColor" />
        <path d="M20 50 L50 20 L80 50 L50 80 Z" stroke="currentColor" strokeWidth="6" fill="none" />
      </svg>
    </div>
    <span className="text-gray-900">LinearB</span>
  </div>
);

const MegaMenuCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
    <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
      <Icon className="w-5 h-5" strokeWidth={1.5} />
    </div>
    <div>
      <h4 className="text-[15px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-[13px] text-gray-500 mt-1 leading-snug">{description}</p>
    </div>
  </div>
);

const PlatformDropdown = () => {
  return (
    <div className="w-[1000px] bg-white rounded-2xl shadow-xl border border-gray-100 p-8 grid grid-cols-12 gap-8 relative z-50">
      <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-10">
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <div className="inline-block px-3 py-1 bg-indigo-50 rounded-full mb-4">
              <span className="text-[11px] font-bold text-indigo-600 tracking-wider uppercase">AI Impact</span>
            </div>
            <div className="space-y-2">
              <MegaMenuCard
                icon={Code2}
                title="AI Code Reviews"
                description="Catch security risks, bugs, and spec mismatches"
              />
              <MegaMenuCard
                icon={BarChart3}
                title="AI & Productivity Insights"
                description="See how AI tools affect cycle time and delivery speed"
              />
              <MegaMenuCard
                icon={Target}
                title="Measure AI Impact"
                description="Track AI adoption and tie it to delivery outcomes"
              />
              <MegaMenuCard
                icon={Server}
                title="MCP Server"
                description="Chat with your data to spot patterns and boost output"
              />
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 bg-indigo-50 rounded-full mb-4 mt-4">
              <span className="text-[11px] font-bold text-indigo-600 tracking-wider uppercase">Efficiency</span>
            </div>
            <div className="space-y-2">
              <MegaMenuCard
                icon={Workflow}
                title="DevOps Workflow Automation"
                description="Policy-based PR routing, approvals, and tests"
              />
              <MegaMenuCard
                icon={HeadphonesIcon}
                title="AI Powered Support"
                description="Unify AI and human code delivery in one clear view"
              />
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <div className="inline-block px-3 py-1 bg-indigo-50 rounded-full mb-4">
              <span className="text-[11px] font-bold text-indigo-600 tracking-wider uppercase">Predictable Delivery</span>
            </div>
            <div className="space-y-2">
              <MegaMenuCard
                icon={PieChart}
                title="Resource Allocation"
                description="Cost initiatives and shape your investment strategy"
              />
              <MegaMenuCard
                icon={DollarSign}
                title="Cost Capitalization"
                description="Capitalize engineering costs with audit-ready reports"
              />
              <MegaMenuCard
                icon={Users2}
                title="Dev Team Management"
                description="Set targets and tie throughput to business outcomes"
              />
            </div>
          </div>

          <div>
            <div className="inline-block px-3 py-1 bg-indigo-50 rounded-full mb-4 mt-4">
              <span className="text-[11px] font-bold text-indigo-600 tracking-wider uppercase">Developer Experience</span>
            </div>
            <div className="space-y-2">
              <MegaMenuCard
                icon={Settings}
                title="Optimization"
                description="Surface friction with feedback and MCP insights"
              />
              <MegaMenuCard
                icon={LineChart}
                title="Reporting"
                description="Spot what's working and what needs attention"
              />
              <MegaMenuCard
                icon={ClipboardList}
                title="Surveys"
                description="Turn developer feedback into actionable signals"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Column 3 - Highlight cards */}
      <div className="col-span-4 flex flex-col gap-4">
        {/* Platform Overview Button */}
        <button className="flex items-center justify-between w-full p-6 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors group">
          <span className="text-lg font-bold text-gray-900">Platform overview</span>
          <div className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>

        {/* Promotional Card */}
        <div className="flex-1 rounded-xl bg-gradient-to-br from-teal-200 to-teal-300 p-8 flex flex-col relative overflow-hidden group cursor-pointer">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight z-10">
            What your software factory is doing to your engineers
          </h3>
          <div className="mt-4 flex items-center gap-2 font-semibold text-gray-900 hover:underline z-10">
            Register now <ArrowRight className="w-4 h-4 -rotate-45" />
          </div>

          <div className="mt-auto pt-16 z-10">
            <div className="inline-block px-3 py-1 bg-gray-900 text-white text-[10px] font-bold rounded-full">
              UPCOMING: October 8 | 10am PT
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 opacity-50 pointer-events-none">
            {/* Using a simple CSS illustration of layers */}
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/40 transform rotate-45 border-2 border-teal-600/20 translate-y-4" />
            <div className="absolute bottom-14 right-10 w-24 h-24 bg-white/60 transform rotate-45 border-2 border-teal-600/30 translate-y-2" />
            <div className="absolute bottom-18 right-10 w-24 h-24 bg-white/80 transform rotate-45 border-2 border-teal-600/40" />
            <div className="absolute bottom-20 right-16 w-3 h-3 bg-teal-900 rounded-full" />
            <div className="absolute bottom-28 right-24 w-3 h-3 bg-teal-900 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourcesCard = ({ title, description }: { title: string, description: string }) => (
  <div className="flex flex-col p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
    <h4 className="text-[14px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h4>
    <p className="text-[12px] text-gray-500 mt-1 leading-snug">{description}</p>
  </div>
);

const ResourcesSmallCard = ({ icon: Icon, title }: { icon: React.ElementType, title: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
    <Icon className="w-[18px] h-[18px] text-gray-500 group-hover:text-blue-600" strokeWidth={2} />
    <span className="text-[13px] font-bold text-gray-900 group-hover:text-blue-600">{title}</span>
  </div>
);

const ResourcesDropdown = () => {
  return (
    <div className="w-[950px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-6 relative z-50">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column (Main Links) */}
        <div className="col-span-4 flex flex-col gap-1">
          <ResourcesCard title="Dev Interrupted Podcast" description="Conversations with engineering leaders" />
          <ResourcesCard title="Reports & Guides" description="Deep dives on productivity and delivery" />
          <ResourcesCard title="Webinars" description="Expert sessions on productivity and AI" />
          <ResourcesCard title="Metrics Benchmarks" description="See how your engineering org stacks up" />
          <ResourcesCard title="Blog" description="Product updates and practical insights" />
          <ResourcesCard title="Help Center" description="Documentation, setup, and support" />
        </div>

        {/* Middle Column (Small Links) */}
        <div className="col-span-3 flex flex-col gap-1 border-l border-gray-100 pl-6 pt-2">
          <ResourcesSmallCard icon={Cloud} title="API Docs" />
          <ResourcesSmallCard icon={Bell} title="Status" />
          <ResourcesSmallCard icon={Blocks} title="Integrations" />
        </div>

        {/* Right Column (Library) */}
        <div className="col-span-5 bg-indigo-50/80 rounded-2xl p-6 relative group cursor-pointer hover:bg-indigo-100/80 transition-colors">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-[17px] font-bold text-gray-900">LinearB Library</h3>
            <div className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-4">
            {[
              "Engineering operations and the context layer",
              "Platform engineering",
              "AI in software development",
              "DevOps",
              "Engineering glossary",
              "Engineering management",
              "Software delivery",
              "Engineering metrics",
              "Developer experience",
              "Developer productivity",
              "Engineering efficiency",
              "Research and data"
            ].map((text) => (
              <div key={text} className="text-[11px] font-bold text-gray-800 hover:text-blue-600 transition-colors leading-snug">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#04362d] rounded-xl p-5 flex justify-between items-center cursor-pointer group hover:bg-[#032a22] transition-colors">
        <span className="text-white font-bold text-[13px] max-w-[80%] leading-relaxed">
          LinearB is a Leader in the 2026 Gartner® Magic Quadrant™ for Developer Productivity Insight Platforms
        </span>
        <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#04362d] transition-all text-white flex-shrink-0">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };
  const navigate = useRouter();
  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between relative bg-white z-40">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 h-full absolute left-1/2 -translate-x-1/2">
            {['Platform', 'Customers', 'Pricing', 'Why LinearB', 'Resources'].map((item) => {
              const hasDropdown = ['Platform', 'Why LinearB', 'Resources'].includes(item);
              const isActive = activeDropdown === item;

              return (
                <div
                  key={item}
                  className="h-full flex items-center relative"
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => {
                      if (hasDropdown) {
                        if (isActive) setActiveDropdown(null);
                        else handleMouseEnter(item);
                      }
                    }}
                    className={`
                    px-4 py-2 rounded-md flex items-center gap-1.5 text-[15px] font-semibold transition-all duration-200 border border-transparent
                    ${isActive ? 'text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                  >
                    {item}
                    {hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
                    )}
                  </button>

                  {/* Animated Bottom Border (Active Tab Indicator) */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 rounded-t-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {isActive && hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className={`absolute top-full pt-[14px] z-50 ${item === 'Resources' ? 'right-[-100px]' : 'left-0'
                          }`}
                      >
                        {item === 'Platform' && <PlatformDropdown />}
                        {item === 'Resources' && <ResourcesDropdown />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Side: CTA Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              initial="rest"
              whileHover="hover"
              onClick={() => navigate.push("/auth/signin")}
              className="relative overflow-hidden inline-flex px-8 py-2.5 border-[8px] cursor-pointer border-black font-extrabold text-[18px] group"
            >
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 z-0">
                {Array.from({ length: 24 }).map((_, i) => {
                  const isCorner = i === 0 || i === 5 || i === 18 || i === 23;
                  const colors = ['bg-cyan-500', 'bg-cyan-500', 'bg-cyan-500', 'bg-cyan-500'];
                  const color = isCorner ? 'bg-cyan-500' : colors[(i * 7) % colors.length];

                  return (
                    <motion.div
                      key={i}
                      variants={{
                        rest: {
                          scale: isCorner ? 1 : 0,
                          opacity: isCorner ? 1 : 0,
                          rotate: isCorner ? 0 : 90,
                          borderRadius: isCorner ? "0%" : "50%",
                        },
                        hover: {
                          scale: 1.05,
                          opacity: 1,
                          rotate: 0,
                          borderRadius: "0%",
                          transition: {
                            delay: (i % 6) * 0.03 + Math.floor(i / 6) * 0.03,
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }
                        }
                      }}
                      className={`w-full h-full ${color} `}
                    />
                  );
                })}
              </div>
              <motion.div
                variants={{
                  rest: { color: "#000" },
                  hover: { color: "#000" }
                }}
                className="relative z-30 transition-colors duration-300"
              >
                Sign in
              </motion.div>
            </motion.button>

          </div>
        </div>
      </header>
      {/* Dark Overlay */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] bg-[#0A0A0A] z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
}
