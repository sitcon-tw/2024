import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
  faInstagram,
  faFlickr,
  faTelegramPlane,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        "border rounded-full text-xl h-10 w-10 flex items-center justify-center",
        "text-[#1E1E1E] border-[#1E1E1E]",
        "hover:bg-[#1E1E1E] hover:text-white"
      )}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#F1F1F1]">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="flex flex-col gap-2">
            <div className="text-[#FF3495] font-bold text-lg">連結</div>
            <Link href="/cfp/" className="footer-link">
              首頁
            </Link>
            <Link href="/cfp/submit" className="footer-link">
              議程與徵稿
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#AC24FF] font-bold text-lg">支持我們</div>
            <a
              href="https://sitcon.org/donate"
              target="_blank"
              className="footer-link"
            >
              我要贊助
            </a>
            <a
              href="https://i.sitcon.org/2024cfs-form"
              target="_blank"
              className="footer-link"
            >
              索取贊助徵求書
            </a>
          </div>
          <div className="flex flex-col gap-2 col-span-2 lg:col-span-1">
            <div className="text-[#65B5FF] font-bold text-lg">歷年主題網站</div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 11 }).map((_, i) => (
                <a
                  href={`https://sitcon.org/${2013 + i}`}
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                >
                  {2013 + i}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#0CE295] font-bold text-lg">聯絡我們</div>
            <a href="mailto:contact@sitcon.org" className="footer-link">
              contact@sitcon.org
            </a>
          </div>
        </div>
        <div className="flex lg:items-end flex-col lg:flex-row lg:justify-between gap-8 py-8 border-t border-[#E5C366]">
          <div className="lg:flex lg:items-center lg:gap-4">
            <img
              src="/2024/sitcon_logo.svg"
              alt="SITCON Logo"
              className="h-10 lg:-translate-y-1.5"
            />
            <div className="mt-4 lg:mt-0 leading-6">
              學生計算機年會
              <br />
              Students&apos; Information Technology Conference
            </div>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <SocialLink href="https://sitcon.org/fb" icon={faFacebookF} />
            <SocialLink href="https://sitcon.org/twitter" icon={faXTwitter} />
            <SocialLink href="https://sitcon.org/yt" icon={faYoutube} />
            <SocialLink
              href="https://sitcon.org/instagram"
              icon={faInstagram}
            />
            <SocialLink href="https://sitcon.org/flickr" icon={faFlickr} />
            <SocialLink href="https://sitcon.org/tg" icon={faTelegramPlane} />
            <SocialLink href="https://sitcon.org/medium" icon={faMedium} />
          </div>
        </div>
      </div>
    </footer>
  );
}
