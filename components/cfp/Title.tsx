export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl leading-normal lg:text-5xl lg:leading-[75px] border-b-[#E5C366] border-b font-bold">
      {children}
    </h1>
  );
}
