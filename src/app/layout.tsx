// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@/providers/ReacQueryClientProvider";
import { AppSidebar } from "@/components/containers/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixel Boom challenge",
  description: "Challenge of Pixel boom front end role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryClientProvider>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <AppSidebar />
              <SidebarTrigger />
              <main className="flex-1 p-6">{children}</main>
            </div>
            </SidebarProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
