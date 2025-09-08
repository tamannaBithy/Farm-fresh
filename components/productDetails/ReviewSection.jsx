import { FaEllipsisV, FaRegStar, FaRegThumbsUp, FaStar } from "react-icons/fa";

const ReviewSection = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Customer Reviews
        </h2>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition">
          Write a Review
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                4.8
              </span>
              <div>
                <div className="flex text-yellow-400 mb-1 text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Based on 127 reviews
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm w-8">5★</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[75%]"></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                95
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm w-8">4★</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[20%]"></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                25
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm w-8">3★</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[4%]"></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                5
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm w-8">2★</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[1%]"></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                1
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm w-8">1★</span>
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[1%]"></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                1
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
              alt="Mike"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Mike Chen
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      1 week ago
                    </span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <FaEllipsisV />
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Great quality tomatoes, very fresh and organic as advertised.
                Delivery was on time. Only minor issue was that a couple of
                tomatoes were slightly overripe, but overall very satisfied.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <button className=" flex items-center hover:text-primary-600 dark:hover:text-primary-400">
                  <FaRegThumbsUp className=" mr-1" />
                  Helpful (8)
                </button>
                <button className="hover:text-primary-600 dark:hover:text-primary-400">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
