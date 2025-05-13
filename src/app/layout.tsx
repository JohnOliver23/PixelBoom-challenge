import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@/providers/ReacQueryClientProvider";
import { AppSidebar } from "@/components/containers/SideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "@/components/ui/navBar";
import { UserFormProvider } from "@/hooks/useUsersForm";
import { Toaster } from "sonner";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserFormProvider>
          <ReactQueryClientProvider>
            <SidebarProvider>
              <AppSidebar />
              <Navbar />
              <main className="flex-1 overflow-auto p-10 mt-14">{children}</main>
              <div className="fixed top-4 left-4 z-50">
                <SidebarTrigger />
                <Toaster />
              </div>
            </SidebarProvider>
          </ReactQueryClientProvider>
        </UserFormProvider>
      </body>
    </html>
  );
}
