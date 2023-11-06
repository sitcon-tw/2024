export default function Subtitle({ children, id }: { children: React.ReactNode, id?: string}) {
  return (
    <h2 id={id} className="text-2xl lg:text-[32px] font-bold pt-[80px] mb-4">{children}</h2>
  );
}
