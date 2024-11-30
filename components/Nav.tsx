"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import useIsApp from "@/hooks/useIsApp";
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
    name: "靜態海報展",
    href: "/poster/",
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
      className="group relative px-2 py-1 font-rubik text-lg font-bold tracking-tighter"
    >
      {children}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-[#462002]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          />
        )}
      </AnimatePresence>
      {!isActive && (
        <motion.div className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-[#462002] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-50" />
      )}
    </Link>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // get mode from query string
  const isApp = useIsApp();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);
  return (
    <>
      {!isApp && (
        <motion.nav
          className="sticky top-0 z-40 bg-[#F8F3E8]/90 backdrop-blur-lg"
          style={{ position: "sticky" }}
          layoutRoot
          layout
        >
          <motion.div
            className="w-full bg-[#FFCA73] text-[#462002] p-1 font-bold text-center overflow-hidden flex justify-center items-center gap-4"
            animate={{ height: 40, opacity: 1 }}
            transition={{ duration: 0.5,
              delay: 2,
             }}
            initial={{ height: 0, opacity: 0 }}
          >
            SITCON 2025 熱烈徵稿中！<Link target="_blank" href="https://sitcon.org/2025/cfp/" className="underline">查看投稿資訊</Link>
          </motion.div>
          <div className="container flex items-center justify-between py-6">
            <Link
              href="/"
              className="font-rubik text-2xl font-bold"
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
              {new Date().getTime() < 1706111999000 && (
                <Link
                  href="/cfp/poster/"
                  className="rounded-xl bg-[#FFCA73] px-3 font-bold text-[#462002] shadow-[0px_5px_8px_0px_#FFBA474D] hover:bg-[#e3b364] active:bg-[#cca15a]"
                >
                  海報投稿
                </Link>
              )}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoMenu className="text-2xl" />
              </button>
            </div>
            <div className="hidden gap-2 lg:flex xl:gap-4">
              {NavLinks.map((link) => (
                <NavLink href={link.href} key={link.name}>
                  {link.name}
                </NavLink>
              ))}
              {new Date().getTime() < 1706111999000 && (
                <Link
                  href="/cfp/poster/"
                  className="flex items-center justify-center rounded-xl bg-[#FFCA73] px-3 font-bold text-[#462002] shadow-[0px_5px_8px_0px_#FFBA474D] hover:bg-[#e3b364] active:bg-[#cca15a]"
                >
                  海報投稿
                </Link>
              )}
            </div>
          </div>
        </motion.nav>
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-40 flex h-screen w-screen flex-col bg-[#F8F3E8]/90 backdrop-blur-lg"
          >
            <div
              className="absolute inset-0 -z-40 m-auto w-[350px] max-w-full opacity-10"
              style={{
                backgroundImage: "url('/2024/website/nav_mobile_bg.webp')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="container flex items-center justify-end py-6">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoClose className="text-2xl" />
              </button>
            </div>
            <div className="container flex grow flex-col items-center justify-center gap-12 pb-40">
              {NavLinks.map((link) => (
                <Link
                  href={link.href}
                  className="font-rubik text-xl font-bold text-[#462002] decoration-[#462002] decoration-2 underline-offset-8 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                  key={link.name}
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
