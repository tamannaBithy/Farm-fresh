"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage }) => {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const query = {};
  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  const createPageUrl = (page) => {
    return (
      "?" +
      new URLSearchParams({
        ...query,
        page: page.toString(),
      }).toString()
    );
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-12">
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center -space-x-px text-gray-600 dark:text-gray-300">
          {/* Prev Button */}
          <li>
            <Link
              href={createPageUrl(Math.max(1, currentPage - 1))}
              className={`block px-3 py-2 ml-0 leading-tight border rounded-l-lg 
                ${
                  currentPage === 1
                    ? "text-gray-400 bg-gray-200 dark:bg-gray-700 cursor-not-allowed"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
            >
              <FaChevronLeft />
            </Link>
          </li>

          {/* Page Numbers */}
          {pages.map((page) => (
            <li key={page}>
              <Link
                href={createPageUrl(page)}
                className={`px-3 py-2 leading-tight border 
                  ${
                    currentPage === page
                      ? "text-white bg-primary-600 border-primary-600 hover:bg-primary-700"
                      : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
              >
                {page}
              </Link>
            </li>
          ))}

          {/* Next Button */}
          <li>
            <Link
              href={createPageUrl(Math.min(totalPages, currentPage + 1))}
              className={`block px-3 py-2 leading-tight border rounded-r-lg 
                ${
                  currentPage === totalPages
                    ? "text-gray-400 bg-gray-200 dark:bg-gray-700 cursor-not-allowed"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
            >
              <FaChevronRight />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
