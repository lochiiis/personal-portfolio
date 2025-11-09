import Navbar from "@/components/Navbar";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";


export const metadata = {
  title: "Lochana Methsiluni",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/logo.ico" />
      </head>
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
       <CustomCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
