import "./../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Support Engine",
  description: "AI-driven service management platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {/* <main className="flex-grow">{children}</main>
        <Footer /> */}
      </body>
    </html>
  );
}
