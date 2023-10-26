"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      className={twMerge(
        "flex gap-2 transition-colors hover:font-bold text-[#1E1E1E]",
        isActive && "font-bold"
      )}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  return (
    <nav className="w-full bg-[#E5C366]">
      <div className="container flex items-center justify-start gap-6 h-16">
        <img
          src="/sitcon_logo.svg"
          alt="SITCON Logo"
          className="-translate-y-1 h-10 mr-2"
        />
        <NavLink href="/cfp">首頁</NavLink>
        <NavLink href="/cfp/submit">議程與徵稿</NavLink>
      </div>
    </nav>
  );
}
