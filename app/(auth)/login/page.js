import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import { FaSeedling } from "react-icons/fa6";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-500 p-3 rounded-full">
              <FaSeedling className=" text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign in to your FarmFresh account
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-xl rounded-2xl">
          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?
              <Link
                href="/register"
                className="text-primary-600 hover:text-primary-500 font-semibold ml-1"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
            Demo Accounts:
          </h3>
          <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
            <div>
              <strong>Customer:</strong> customer@demo.com / password123
            </div>
            <div>
              <strong>Farmer:</strong> farmer@demo.com / password123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
