import type { Metadata } from "next";
import "./globals.css";
import { Exo_2, Geist } from 'next/font/google';
import { cn } from "@/lib/utils";
import { TooltipProvider } from "../components/ui/tooltip";
import SideBar from "./components/SideBar";
import { ThemeProvider } from "next-themes";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const exo2 = Exo_2({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
}); 

export const metadata: Metadata = {
  title: "Transaction Dashboard",
  description: "Created by Joseph Fatoye - josephfatoye.netlify.app",
  icons: "td_logo.png",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className={`${exo2.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <TooltipProvider>
            <div className="flex min-h-screen bg-red-300">
              <SideBar />
              <div className="flex w-full bg-bg">
                {children}    
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
