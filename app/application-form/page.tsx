"use client";

import Navigation from "@/components/Navigation";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Script from "next/script"; // นำเข้า Script จาก next/script

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* 1. โหลดตัวแปร Initial (ใช้ strategy="afterInteractive") */}
      <Script id="form-init-vars">
        {`var _lg_form_init_ = { aid: "8595", template: "wallet-lines" };`}
      </Script>

      {/* 2. โหลดไฟล์ Script หลัก */}
      <Script 
        src="https://loansaccount.com/form/applicationInit.js" 
        strategy="afterInteractive"
      />

      <section className="max-w-5xl mx-auto px-4 py-12 my-10">
        {/* จุดที่ Form จะมาแสดง */}
        <div id="_lg_form_"></div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}