export default function VideoCard({
  image,
  title,
  href,
}: {
  image: string;
  title: string;
  href: string;
}) {
  return (
    <a
      className="relative aspect-video w-full rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-95 flex items-end justify-start px-2 transition-all"
      style={{
        backgroundImage: `url(/2024/cfp/video-image/${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      href={href}
      target="_blank"
    >
      <div className="bg-gradient-to-b from-transparent to-black absolute inset-0 w-full h-full opacity-50 rounded-lg" />
      <div className="relative text-white">{title}</div>
    </a>
  );
}
