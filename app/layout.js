import "./globals.css";
import localFont from "next/font/local";

const cabinet = localFont({
  src: [
    {
      path: "./fonts/CabinetGrotesk-Regular.woff2",
      weight: "400", // Standard Regular weight
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Medium.woff2",
      weight: "500", // Standard Medium weight
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Bold.woff2",
      weight: "600", // Standard Semibold weight
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Black.woff2",
      weight: "700", // Standard Semibold weight
      style: "normal",
    },
  ],
  variable: "--font-cabinet", // A single variable for the whole family
});

const anton = localFont({
  src: "./fonts/Anton-Regular.woff2",
  variable: "--font-anton",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased ${cabinet.variable} ${anton.variable}`}
    >
      <body className="min-h-full w-full font-cabinet">{children}</body>
    </html>
  );
}
