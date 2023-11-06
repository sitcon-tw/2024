"use client";
import Nav from "@/components/cfp/Nav";
import Footer from "@/components/cfp/Footer";
import BackToTopButton from "@/components/cfp/BackToTopBtn";
import Head from 'next/head'

export default function CFPLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <link rel="icon" href="/cfp/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/cfp/favicon.png" type="image/png" />
      </Head>
      <Nav />
      <main className="flex-grow">
        {children}
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
