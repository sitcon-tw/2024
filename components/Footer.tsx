import { motion } from "framer-motion";
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
  return (
    <>
      <div
        className={twMerge(
          "md:flex md:justify-between md:items-center md:px-10",
          "grid grid-cols-5 gap-4",
          "my-10 container",
        )}
      >
        {socialMedia.map(({ href, icon }, index) => (
          <div
            key={href}
            className={twMerge(
              "flex justify-center items-center",
              "md:-translate-y-[calc(var(--shift)*-1rem)]",
            )}
            style={
              {
                "--shift":
                  (Math.abs(index - (socialMedia.length / 2 - 0.5)) / 3.14) *
                  1.5 *
                  1.5,
              } as React.CSSProperties
            }
          >
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-3xl lg:text-5xl text-[#462002] hover:text-[#323232] transition-all ease-in-out hover:-translate-y-2"
            >
              {icon}
            </a>
          </div>
        ))}
      </div>
      <footer className="bg-[#B1884C] text-white text-center py-10 rounded-t-[40vw] md:rounded-t-[50%]">
        <div className="font-bold text-lg">學生計算機年會</div>
        <div className="text-lg">
          Students' Information Technology Conference
        </div>
        <div className="mt-4 flex justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center leading-7">
            <MdHandshake className="text-5xl" />
            <div className="font-bold mt-2">合作聯繫</div>
            <a
              href="mailto:contact@sitcon.org"
              className="underline underline-offset-2"
            >
              contact@sitcon.org
            </a>
          </div>
          <div className="flex flex-col justify-center items-center leading-7">
            <IoTicket className="text-5xl" />
            <div className="font-bold mt-2">票務問題</div>
            <a
              href="mailto:ticket@sitcon.org"
              className="underline underline-offset-2"
            >
              ticket@sitcon.org
            </a>
          </div>
        </div>
        <div className="font-bold mt-2">歷年網站</div>
        <div className="flex justify-center gap-x-12 gap-y-4 md:gap-6 flex-wrap items-center">
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
