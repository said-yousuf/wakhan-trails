import { Suspense } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Search } from '../components/Search';

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

export default function Flight() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow md:pt-42 pt-20 w-full bg-gray-50 pb-5 px-5">
          <Search />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
