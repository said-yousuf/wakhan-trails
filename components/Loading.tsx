export const HomeLoadingFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-6 px-4">
        <div className="relative">
          <div className="w-28 h-28 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              className="w-16 h-16 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 10H22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 14.5H7.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 14.5H12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 14.5H17.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome to Wakhan Trails
          </h2>
        </div>

        <div className="flex space-x-2 pt-2">
          <div
            className="w-3 h-3 rounded-full bg-blue-400 animate-bounce"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-2xl">
          <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-28 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-3 border-t-4 border-blue-300 rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-6 border-t-4 border-blue-100 rounded-full animate-spin animation-delay-300"></div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            Preparing your flight search
          </h3>
          <p className="text-gray-500 mt-2">
            Just a moment while we gather the best options for you
          </p>
        </div>
      </div>
    </div>
  );
};
