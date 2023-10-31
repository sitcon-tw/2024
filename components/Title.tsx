export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-5xl font-bold text-center my-8 relative font-stencil">
        <span>{children}</span>
      </div>
    </div>
  );
}
