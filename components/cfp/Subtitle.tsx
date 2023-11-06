export default function Subtitle({ children, id }: { children: React.ReactNode, id?: string}) {
  return (
    <h2 id={id} className="text-2xl lg:text-[32px] font-bold my-4 scroll-mt-20">{children}</h2>
  );
}
