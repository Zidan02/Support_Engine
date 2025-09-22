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
//       <body className="relative min-h-screen flex flex-col">
//         {/* Navbar at the very top */}
//         <Navbar />

//         {/* This div now holds the background for the content area */}
//         <div className="relative flex-grow">
//           {/* Background Image for the content area with a minimum height */}
//           <div className="absolute inset-0 -z-10 min-h-screen">
//             <Image
//               src="/hero-bg.png"
//               alt="Background"
//               fill
//               priority
//               className="object-cover object-center"
//             />
//             <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
//           </div>

//           {/* Page sections flow naturally below the navbar, on top of the background */}
//           <main className="relative z-10">{children}</main>
//         </div>

//         {/* Optional footer */}
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
//       <body className="relative min-h-screen flex flex-col">
//         {/* Navbar always at the top */}
//         <Navbar />

//         {/* Content wrapper with background */}
//         <div className="relative flex-grow">
//           {/* Fixed Background Image */}
//           <div className="absolute inset-0 -z-10 min-h-screen">
//             <Image
//               src="/background.jpg"
//               alt="Background"
//               fill
//               priority
//               className="object-cover object-center fixed" // 👈 fixed background
//             />
//             {/* Overlay for dim effect */}
//             <div className="absolute inset-0 bg-black/40" />
//           </div>

//           {/* Foreground content */}
//           <main className="relative z-10">{children}</main>
//         </div>

//        <Footer />
//       </body>
//     </html>
//   );
// }

import "./../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import BackToTop from "./components/BackToTop";

export const metadata = {
  title: "Support Engine",
  description: "AI-driven service management platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
        {/* Fixed Background Image for entire viewport */}
        <div className="fixed inset-0 -z-20">
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Overlay for dim effect */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Navbar with solid background to cover the background image */}
        <div className="relative z-30 shadow-md">
          <Navbar />
        </div>

        {/* Main content area with solid background */}
        <main className="relative z-10 flex-grow">
          {children}
        </main>

        {/* Footer with solid background */}
        <div className="relative z-30 shadow-md">
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}