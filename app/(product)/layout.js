import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";
import "../globals.css";

export const metadata = {
  title: "Farm-Fresh",
  description: "Local Farmer Booking - Fresh Produce Direct from Farmers",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
