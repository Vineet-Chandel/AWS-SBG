"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NAV_ITEMS = [
  {
    name: "Dashboard",
    path: "/main/dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[50%] shrink-0" viewBox="0 0 1024 1024">
        <path fill="currentColor" fillOpacity={0.15} d="m512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7zm434.5 422.9c-6 6-13.1 10.8-20.8 13.9c7.7-3.2 14.8-7.9 20.8-13.9m-887-34.7c5 30.3 31.4 53.5 63.1 53.5h.9c-31.9 0-58.9-23-64-53.5m-.9-10.5v-1.9zm.1-2.6c.1-3.1.5-6.1 1-9.1c-.6 2.9-.9 6-1 9.1"></path>
        <path fill="currentColor" d="M951 510c0-.1-.1-.1-.1-.2l-1.8-2.1c-.1-.1-.2-.3-.4-.4c-.7-.8-1.5-1.6-2.2-2.4L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.6 63.6 0 0 0-16 26.6l-.6 2.1l-.3 1.1l-.3 1.2c-.2.7-.3 1.4-.4 2.1c0 .1 0 .3-.1.4c-.6 3-.9 6-1 9.1v3.3c0 .5 0 1 .1 1.5c0 .5 0 .9.1 1.4c0 .5.1 1 .1 1.5c0 .6.1 1.2.2 1.8c0 .3.1.6.1.9l.3 2.5v.1c5.1 30.5 32.2 53.5 64 53.5h42.5V940h691.7V614.3h43.4c8.6 0 16.9-1.7 24.5-4.9s14.7-7.9 20.8-13.9a63.6 63.6 0 0 0 18.7-45.3c0-14.7-5-28.8-14.3-40.2M568 868H456V664h112zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3z"></path>
      </svg>
    )
  },
  {
    name: "Events",
    path: "/main/events",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[50%] shrink-0" viewBox="0 0 512 512">
        <path fill="currentColor" d="M361.8 275.9c-1.9-5.4-6.6-9.3-12.3-10.1l-55.5-8.2l-24.1-50c-2.6-5.3-8-8.6-13.9-8.6s-11.3 3.3-13.9 8.6l-24.1 50l-55.5 8.2c-5.6.8-10.4 4.7-12.3 10.1c-1.8 5.3-.4 11.2 3.6 15.2l40.6 40.6L185 388c-1 5.7 1.5 11.4 6.3 14.7s11.1 3.7 16.3.9l48.3-26l48.4 26c5.2 2.8 11.5 2.4 16.3-.9c4.8-3.2 7.2-9 6.3-14.7l-9.4-56.3l40.7-40.6c4-4 5.4-9.9 3.6-15.2M47.9 53.1c-10.3 0-19.4 3.4-26.7 11.2S10 81.1 10 91.4v382.7c0 10.3 3.9 18.9 11.2 26.7c7.7 7.3 16.3 11.2 26.7 11.2h416.3c10.3 0 19.4-3.4 26.7-11.2c7.3-7.7 11.2-16.8 11.2-27.1V91.4c0-10.8-3.9-19.4-11.2-27.1c-7.7-7.3-16.3-11.2-26.7-11.2h-49.7c-.1 4.5-.1 9-.3 13.4v1.2c0 25.1-20.5 45.6-45.6 45.6s-45.4-20.6-45.4-45.6c0-.8-.1-2.3.1-4.2V53.1H188.2c-.1 4.5-.1 9-.3 13.4v1.2c0 25.1-20.5 45.6-45.6 45.6S96.9 92.7 96.9 67.6c0-.8-.1-2.3.1-4.2V53.1zm64.8 0v10.7l-.1.5v3.3c0 16.6 13.1 29.9 29.7 29.9c16.4.1 29.8-13.2 29.9-29.6v-1.2c.2-4.3.3-8.8.3-13.4h-59.8zm226.3 0v10.7l-.1.5v3.3c0 16.6 13.1 29.9 29.7 29.9c16.4.1 29.8-13.2 29.9-29.6v-1.3c.2-4.3.3-8.8.3-13.4zM65.1 142.2H447v319.1H65.1zM142.5 0c-15.8 0-28.9 12.4-29.7 28.3h-.1v35.6c-.1 1.1 0 2.2 0 3.3c0 16.5 13.2 29.8 29.6 29.8c16.5 0 29.8-13.3 29.8-29.8v-.6c.5-11.7.2-24.7.2-36.8v-1.5h-.1C171.4 12.4 158.3 0 142.5 0m226.3 0c-15.8 0-28.9 12.4-29.7 28.3h-.1v35.6c-.1 1.1 0 2.2 0 3.3c0 16.5 13.2 29.8 29.6 29.8c16.5 0 29.8-13.3 29.8-29.8v-.6c.5-11.7.2-24.7.2-36.8v-1.5h-.1C397.7 12.4 384.6 0 368.8 0"></path>
      </svg>
    )
  },
  {
    name: "Certificates",
    path: "/main/my-certificates",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[50%] shrink-0" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4.75 3A2.75 2.75 0 0 0 2 5.75V11a5 5 0 0 1 8 6v1h9.25A2.75 2.75 0 0 0 22 15.25v-9.5A2.75 2.75 0 0 0 19.25 3zm2 4h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5M12 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 10a4 4 0 1 0 0 8.001A4 4 0 0 0 6 10m3 8.001c-.835.628-1.874 1-3 1a4.98 4.98 0 0 1-3-.998v3.246c0 .57.605.92 1.09.669l.09-.055L6 20.592l1.82 1.272a.75.75 0 0 0 1.172-.51L9 21.249z"></path>
      </svg>
    )
  },
  {
    name: "Contact Us",
    path: "/main/contact-us",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-[50%] shrink-0" viewBox="0 0 24 24">
        <path fill="currentColor" d="M14.77 12.4c.15.07.32.1.48.1c.33 0 .64-.13.88-.36L18.31 10h.94C20.77 10 22 8.77 22 7.25v-2.5C22 3.23 20.77 2 19.25 2h-4.5C13.23 2 12 3.23 12 4.75v2.5c0 1.26.85 2.32 2 2.65v1.35c0 .5.31.95.77 1.15M8 13.5c-1.93 0-3.5-1.57-3.5-3.5S6.07 6.5 8 6.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5M8 22c-2.06 0-3.64-.56-4.7-1.67c-1.336-1.404-1.303-3.174-1.3-3.357v-.013C2 15.89 2.9 15 4 15h8c1.1 0 2 .9 2 2l.001.006c.003.127.045 1.91-1.3 3.324C11.64 21.44 10.06 22 8 22"></path>
      </svg>
    )
  }
];

const SETTINGS_ITEM = {
  name: "Settings",
  path: "/main/settings",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-[55%] shrink-0" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"></path>
      <path fill="currentColor" fillRule="evenodd" d="M12.68 2.806a1.4 1.4 0 0 0-1.36 0l-7.2 4A1.4 1.4 0 0 0 3.4 8.03v7.94c0 .509.276.977.72 1.224l7.2 4a1.4 1.4 0 0 0 1.36 0l7.2-4a1.4 1.4 0 0 0 .72-1.223V8.03a1.4 1.4 0 0 0-.72-1.224zM7.25 12a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clipRule="evenodd"></path>
    </svg>
  )
};

function SidebarItem({ item, isActive }: { item: typeof NAV_ITEMS[0], isActive: boolean }) {
  return (
    <Link href={item.path} className="relative group block">
      <div
        className={`
          flex items-center overflow-hidden h-[50px] rounded-full transition-all duration-300 ease-out z-50 origin-center md:origin-left
          ${isActive
            ? "w-[50px] bg-white text-black"
            : "w-[50px] bg-[#222222] text-[#999999] md:hover:w-[140px] hover:bg-[#2a2a2a] hover:text-white"
          }
        `}
      >
        <div className="w-[50px] h-[50px] shrink-0 flex items-center justify-center">
          {item.icon}
        </div>
        {!isActive && (
          <span className="hidden md:inline font-semibold text-sm whitespace-nowrap text-white pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {item.name}
          </span>
        )}
      </div>
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-full h-[70px] md:h-[95%] md:w-[70px] md:ml-4 rounded-t-[24px] md:rounded-[32px] bg-[#111111] border-t md:border border-[#222] px-6 md:p-2 flex flex-row md:flex-col items-center justify-between md:justify-start relative z-40">
      <div className="hidden md:block mt-2 w-[50px]">
        <img
          src="https://res.cloudinary.com/dj0ivep44/image/upload/v1790602129/6c65e1fa-d333-4c6c-8075-e87fb5ba0f8b.png"
          alt="logo"
          className="w-full rounded-full"
        />
      </div>

      <div className="hidden md:block w-8 h-px bg-white/10 my-5 shrink-0" />

      <div className="contents md:w-full md:flex md:flex-col md:gap-3 relative">
        {NAV_ITEMS.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            isActive={pathname.startsWith(item.path)}
          />
        ))}
      </div>

      <div className="contents md:mt-auto md:mb-2 md:w-full md:flex md:flex-col md:gap-3 relative">
        <div className="hidden md:block w-8 h-px bg-white/10 my-2 shrink-0 mx-auto" />
        <SidebarItem
          item={SETTINGS_ITEM}
          isActive={pathname.startsWith(SETTINGS_ITEM.path)}
        />
      </div>
    </div>
  );
}
