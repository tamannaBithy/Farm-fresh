import { FaBars, FaMoon } from "react-icons/fa";
import { FaSeedling, FaSun } from "react-icons/fa6";

const Navbar = () => {
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
            <a
              href="index.html"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Home
            </a>
            <a
              href="products.html"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Products
            </a>
            <a
              href="farmers.html"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              Farmers
            </a>
            <a
              href="about.html"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              id="darkToggle"
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <FaMoon className="dark:hidden" />

              <FaSun className="hidden dark:block" />
            </button>

            {/* mobile menu */}
            <button className="md:hidden p-2 text-gray-700 dark:text-gray-300">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
