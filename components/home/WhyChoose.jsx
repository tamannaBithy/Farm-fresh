import { FaHandshake, FaShieldAlt, FaTruck } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose FarmFresh?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We connect you directly with local farmers for the freshest produce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="text-2xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Fresh produce delivered within 24 hours of harvest
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-2xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Quality Guaranteed
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              100% organic and pesticide-free produce
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandshake className="text-2xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Support Local
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Direct support to local farmers and communities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
