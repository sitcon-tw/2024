export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl lg:text-[32px] font-bold mt-8 mb-4">{children}</h2>
  );
}
