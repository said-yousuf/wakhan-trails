import { LoadingFallback } from '@/components/Loading';
import { Suspense } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Search } from '../components/Search';

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
