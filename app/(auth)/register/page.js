import RegistrationForm from "@/components/auth/RegistrationForm";
import { FaSeedling } from "react-icons/fa6";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-500 p-3 rounded-full">
              <FaSeedling className=" text-white text-2xl" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join FarmFresh community today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 py-8 px-8 shadow-xl rounded-2xl">
            <RegistrationForm />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <a
                  href="login.html"
                  className="text-primary-600 hover:text-primary-500 font-medium"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
