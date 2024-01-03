import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F3E8]">
      <Nav />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
