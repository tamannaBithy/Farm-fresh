import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";
import { Roboto } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farm-Fresh",
  description: "Local Farmer Booking - Fresh Produce Direct from Farmers",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
