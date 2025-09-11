// import "./../styles/globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Image from "next/image";

// export const metadata = {
//   title: "Support Engine",
//   description: "AI-driven service management platform",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="relative min-h-screen">
//         <Navbar />

//         {/* Hero Section Container */}
//         <div className="relative w-full h-[600px] md:h-screen lg:h-[800px] flex items-center justify-center">
//           {/* Background Image */}
//           <Image
//             src="/hero-bg.png"
//             alt="Background"
//             fill
//             priority
//             className="object-cover object-center"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/40" />

//           {/* Hero Section (placed on top of the background) */}
//           <div className="relative z-10 text-center text-white">
//             {children}
//           </div>
//         </div>

//         {/* The rest of your page content will be outside the hero section */}
//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }

// import "./../styles/globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Image from "next/image";

// export const metadata = {
//   title: "Support Engine",
//   description: "AI-driven service management platform",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="relative min-h-screen">
//         {/* Global Background */}
//         <div className="absolute inset-0 -z-10">
//           <Image
//             src="/hero-bg.png"
//             alt="Background"
//             fill
//             priority
//             className="object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
//         </div>

//         {/* Navbar at the very top */}
//         <Navbar />

//         {/* Page sections flow naturally below navbar */}
//         <main>{children}</main>

//         {/* Optional footer */}
//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }



import "./../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Support Engine",
  description: "AI-driven service management platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
        {/* Navbar at the very top */}
        <Navbar />

        {/* This div now holds the background for the content area */}
        <div className="relative flex-grow">
          {/* Background Image for the content area with a minimum height */}
          <div className="absolute inset-0 -z-10 min-h-screen">
            <Image
              src="/hero-bg.png"
              alt="Background"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
          </div>

          {/* Page sections flow naturally below the navbar, on top of the background */}
          <main className="relative z-10">{children}</main>
        </div>

        {/* Optional footer */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}