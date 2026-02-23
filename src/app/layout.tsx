import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        {/* Theme initialization */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            const savedTheme = localStorage.getItem("theme");

            if (
              savedTheme === "dark" ||
              (!savedTheme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            }
          `}
        </Script>

        {/* FontAwesome */}
        <Script
          src="https://kit.fontawesome.com/75884eb091.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}