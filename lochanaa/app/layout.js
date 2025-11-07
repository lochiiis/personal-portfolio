import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Lochana",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
