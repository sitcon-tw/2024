import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Nav />
        <div className="grow mx-[33px]">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
