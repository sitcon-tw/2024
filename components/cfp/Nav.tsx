"use client";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, createContext, useContext, useEffect } from "react";
const NavContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: (value: boolean) => {},
});
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  let { setIsMenuOpen } = useContext(NavContext);
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      className={twMerge(
        "flex items-center gap-2 transition-colors",
        !isActive ? "text-[#1E1E1E] hover:font-bold" : "text-black font-bold"
      )}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndex, setIsIndex] = useState(false);
  const { scrollY } = useScroll();
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navBackground = useMotionTemplate`rgba(229, 195, 102, ${navBackgroundOpacity})`;
  const pathname = usePathname();
  useEffect(() => {
    setIsIndex(pathname === "/cfp/");
  }, [pathname]);
  return (
    <NavContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <motion.div
        className="w-full sticky top-0 self-start z-50"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          backgroundColor: isIndex ? navBackground : "rgba(229, 195, 102, 1)",
          transition: "background-color 0.2s ease-in-out",
        }}
      >
        {/* desktop nav */}
        <nav className="container items-center justify-start gap-6 h-16 hidden lg:flex">
          <Link href="/cfp/">
            <img
              src="/2024/sitcon_logo.svg"
              alt="SITCON Logo"
              className="-translate-y-1 h-10 mr-2"
            />
          </Link>
          <NavLink href="/cfp/">首頁</NavLink>
          <NavLink href="/cfp/submit/">議程與徵稿</NavLink>
        </nav>
        {/* mobile nav */}
        <nav className="container grid grid-cols-4 items-center justify-start gap-6 h-16 lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-[#1E1E1E] text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />

          <Link
            href="/cfp/"
            className="col-span-2 flex items-center justify-center"
          >
            <img
              src="/2024/sitcon_logo.svg"
              alt="SITCON Logo"
              className="-translate-y-1 h-10 pointer-events-none"
            />
          </Link>
        </nav>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#E5C366] z-50 lg:hidden"
            initial={{ clipPath: "circle(0% at 36px 36px)" }}
            animate={{ clipPath: "circle(150% at 36px 36px)" }}
            exit={{ clipPath: "circle(0% at 36px 36px)" }}
          >
            <div className="container grid grid-cols-4 items-center justify-start gap-6 h-16">
              <FontAwesomeIcon
                icon={faX}
                className="text-[#1E1E1E] text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />

              <Link
                href="/cfp/"
                className="col-span-2 flex items-center justify-center"
              >
                <img
                  src="/2024/sitcon_logo.svg"
                  alt="SITCON Logo"
                  className="-translate-y-1 h-10 pointer-events-none"
                />
              </Link>
            </div>
            <div className="container flex flex-col gap-3 border-t border-[#373737] border-opacity-50 py-6">
              <div className="text-[#000] font-bold text-lg mt-2 tracking-wider">
                徵稿
              </div>
              <NavLink href="/cfp/">首頁</NavLink>
              <NavLink href="/cfp/submit/">投稿頁面</NavLink>
              <div className="text-[#000] font-bold text-lg mt-2 tracking-wider">
                稿件說明
              </div>
              <NavLink href="/cfp/normal/">一般議程</NavLink>
              <NavLink href="/cfp/undefined/">開放式議程</NavLink>
              <NavLink href="/cfp/poster/">海報</NavLink>
              <div className="text-[#000] font-bold text-lg mt-2 tracking-wider">
                其他事項
              </div>
              <NavLink href="/cfp/coc/">Code of Conduct</NavLink>
              <NavLink href="/cfp/notice/">投稿注意事項與授權</NavLink>
              <NavLink href="/cfp/rehearsal/">試講與彩排</NavLink>
              <NavLink href="/cfp/qa/">Q&A</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NavContext.Provider>
  );
}
