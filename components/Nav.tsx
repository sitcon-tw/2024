import Link from "next/link";
const NavLinks = [
  {
    name: "年會活動",
    href: "/events",
  },
  {
    name: "議程表",
    href: "/agenda",
  },
  {
    name: "會場地圖",
    href: "/map",
  },
  {
    name: "交通方式",
    href: "/traffic",
  },
  {
    name: "報名資訊",
    href: "/signup",
  },
  {
    name: "SITCON 團隊",
    href: "/staff",
  },
  {
    name: "合作夥伴",
    href: "/sponsor",
  },
];
export default function Nav() {
  return (
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
        <div className="flex gap-8">
          {NavLinks.map((link) => {
            return (
              <Link
                href={link.href}
                className="text-lg font-bold font-rubik hover:underline underline-offset-8 decoration-2 text-[#462002] decoration-[#462002]"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
