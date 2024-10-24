import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Slab as FontSans } from 'next/font/google'
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constant";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
