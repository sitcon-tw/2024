import Link from "next/link";

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2 container">
      <div className="w-[150px] border flex flex-col">
        <Link href="/cfp/submit">投稿頁面</Link>
        <Link href="/cfp/normal">一般議程</Link>
        <Link href="/cfp/undefined">開放式議程</Link>
        <Link href="/cfp/undefined">海報</Link>
        <Link href="/cfp/coc">CoC</Link>
        <Link href="/cfp/notice">投稿注意事項與授權</Link>
        <Link href="/cfp/rehearsal">試講與彩排</Link>
        <Link href="/cfp/qa">Q&A</Link>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
}
