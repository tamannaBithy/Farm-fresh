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

        <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2025 FarmFresh. All rights reserved by LWS.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
