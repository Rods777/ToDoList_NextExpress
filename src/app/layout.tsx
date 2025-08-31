import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap', // Ensures text is visible during font loading
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify desired weights
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "ToDoListNiBok",
  description: "This is a simple to do list app for learning hehe :3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">{children}</Theme>
        <Toaster 
          position="top-center"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
