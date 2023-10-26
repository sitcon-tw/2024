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
      <div className="container py-8">
        <div className="flex items-end justify-between gap-2">
          <div>
            <img src="/sitcon_logo.svg" alt="SITCON Logo" className="h-10" />
            <br />
            學生計算機年會
            <br />
            Students' Information Technology Conference
          </div>
          <div className="flex gap-2 items-center">
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
