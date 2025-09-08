import { auth } from "@/auth";
import Link from "next/link";
import { FaSeedling } from "react-icons/fa6";
import Logout from "./auth/Logout";
import ThemeToggle from "./ThemeToggle";

const Navbar = async ({ login = false }) => {
  const session = await auth();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <a href="index.html" className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-lg">
                <FaSeedling className=" text-white text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  FarmFresh
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Local Farmer Booking
                </p>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Products
            </Link>
            <Link
              href="/farmers"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Farmers
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              About
            </Link>

            {!login && (
              <>
                {session?.user ? (
                  <div>
                    <span className="mx-1"> {session?.user?.name} </span>
                    <span> | </span>
                    <Logout />
                  </div>
                ) : (
                  <Link href="/login">Login</Link>
                )}
              </>
            )}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
