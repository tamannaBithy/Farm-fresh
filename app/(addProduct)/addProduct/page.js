import AddProducts from "@/components/products/AddProducts";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary-600">
                Home
              </Link>
            </li>
            <li>
              <FaChevronRight className=" text-gray-400 text-xs" />
            </li>
            <li>
              <Link
                href="/manage-products"
                className="text-gray-500 hover:text-primary-600"
              >
                Manage Products
              </Link>
            </li>
            <li>
              <FaChevronRight className=" text-gray-400 text-xs" />
            </li>
            <li className="text-gray-900 dark:text-white">Add Product</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary-600 text-white px-8 py-6">
            <h1 className="text-3xl font-bold">Add New Product</h1>
            <p className="text-primary-100 mt-2">
              Share your fresh produce with customers
            </p>
          </div>

          <AddProducts />
        </div>
      </div>
    </>
  );
};

export default page;
