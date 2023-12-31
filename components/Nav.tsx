"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
const NavLinks = [
  {
    name: "年會活動",
    href: "/events/",
  },
  {
    name: "議程表",
    href: "/agenda/",
  },
  {
    name: "會場地圖",
    href: "/venue/",
  },
  {
    name: "交通方式",
    href: "/traffic/",
  },
  {
    name: "報名資訊",
    href: "/signup/",
  },
  {
    name: "SITCON 團隊",
    href: "/staff/",
  },
  {
    name: "合作夥伴",
    href: "/sponsor/",
  },
];
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
      className="text-lg font-bold font-rubik hover:bg-black/5 px-2 py-1 rounded relative"
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          initial={false}
          className="absolute -bottom-0.5 left-0 w-full h-[3px] bg-[#462002] rounded-full"
        />
      )}
    </Link>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 bg-[#F8F3E8]/90 backdrop-blur-lg">
        <div className="flex justify-between items-center py-6 container">
          <Link
            href="/"
            className="text-2xl font-bold font-rubik"
            style={{
              background:
                "linear-gradient(90deg, rgba(56, 90, 172, 0.80) 0%, rgba(148, 110, 52, 0.75) 58.96%, #462002 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            SITCON 2024
          </Link>
          <div className="flex gap-6 lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <IoMenu className="text-2xl" />
            </button>
          </div>
          <div className="hidden lg:flex gap-4">
            {NavLinks.map((link) => (
              <NavLink href={link.href}>{link.name}</NavLink>
            ))}
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-screen h-screen bg-[#F8F3E8]/90 backdrop-blur-lg flex flex-col"
          >
            <div
              className="absolute inset-0 m-auto -z-10 w-[350px] max-w-full opacity-10"
              style={{
                backgroundImage: "url('/2024/website/nav_mobile_bg.webp')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex justify-end items-center py-6 container">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoClose className="text-2xl" />
              </button>
            </div>
            <div className="gap-12 flex justify-center items-center flex-col container grow pb-40">
              {NavLinks.map((link) => (
                <Link
                  href={link.href}
                  className="text-xl font-bold font-rubik hover:underline underline-offset-8 decoration-2 text-[#462002] decoration-[#462002]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
