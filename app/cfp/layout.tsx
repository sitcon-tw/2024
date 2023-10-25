import Nav from "@/components/cfp/Nav";
import Footer from "@/components/cfp/Footer";
export default function CFPLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
