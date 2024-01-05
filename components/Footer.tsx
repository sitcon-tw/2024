"use client";
import { twMerge } from "tailwind-merge";
import { MdHandshake } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaFlickr,
  FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPlurk, SiOdysee } from "react-icons/si";
import MovingSponsorCards from "./website/MovingSponsorCards";
import { usePathname } from "next/navigation";
const socialMedia = [
  {
    href: "https://sitcon.org/fb",
    icon: <FaFacebookF />,
  },
  {
    href: "https://sitcon.org/instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://sitcon.org/twitter",
    icon: <FaXTwitter />,
  },
  {
    href: "https://sitcon.org/tg",
    icon: <FaTelegramPlane />,
  },
  {
    href: "https://sitcon.org/plurk",
    icon: <SiPlurk />,
  },
  {
    href: "https://sitcon.org/discord",
    icon: <FaDiscord />,
  },
  {
    href: "https://sitcon.org/yt",
    icon: <FaYoutube />,
  },
  {
    href: "https://sitcon.org/flickr",
    icon: <FaFlickr />,
  },
  {
    href: "https://sitcon.org/odysee",
    icon: <SiOdysee />,
  },
  {
    href: "https://sitcon.org/medium",
    icon: <FaMedium />,
  },
];
export default function Footer() {
  const isSponsorPage = usePathname().startsWith("/sponsor");
  return (
    <>
      {!isSponsorPage && <MovingSponsorCards />}
      <div
        className={twMerge(
          "md:flex md:items-center md:justify-between",
          "grid grid-cols-5 gap-4",
          "mb-4 mt-10 px-5",
        )}
      >
        {socialMedia.map(({ href, icon }, index) => (
          <div
            key={href}
            className={twMerge(
              "flex items-center justify-center",
              "md:-translate-y-[calc(var(--shift)*-1rem)]",
            )}
            style={
              {
                "--shift":
                  Math.sinh(Math.abs(index - (socialMedia.length / 2 - 0.5))) /
                  15,
              } as React.CSSProperties
            }
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-[#462002] transition-all ease-in-out hover:-translate-y-2 hover:text-[#323232] lg:text-5xl"
            >
              {icon}
            </a>
          </div>
        ))}
      </div>
      <footer className="rounded-[100%_100%_0_0/50%_50%] bg-[#B1884C] py-10 text-center text-white">
        <div className="text-lg font-bold">學生計算機年會</div>
        <div className="text-lg">
          Students' Information Technology Conference
        </div>
        <div className="mt-4 flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center leading-7">
            <MdHandshake className="text-5xl" />
            <div className="mt-2 font-bold">合作聯繫</div>
            <a
              href="mailto:contact@sitcon.org"
              className="underline underline-offset-2"
            >
              contact@sitcon.org
            </a>
          </div>
          <div className="flex flex-col items-center justify-center leading-7">
            <IoTicket className="text-5xl" />
            <div className="mt-2 font-bold">票務問題</div>
            <a
              href="mailto:ticket@sitcon.org"
              className="underline underline-offset-2"
            >
              ticket@sitcon.org
            </a>
          </div>
        </div>
        <div className="mt-2 font-bold">歷年網站</div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-6">
          {
            // 2013 to 2023
            Array.from({ length: 11 }, (_, i) => 2013 + i).map((year) => (
              <a
                key={year}
                href={`https://sitcon.org/${year}/`}
                target="_blank"
                className="underline underline-offset-2"
              >
                {year}
              </a>
            ))
          }
        </div>
      </footer>
    </>
  );
}
