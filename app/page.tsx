import { Suspense } from 'react';
import { Brands } from './components/Brands';
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Locations } from './components/Locations';
import { Packages } from './components/Packages';
import { Search } from './components/Search';
import { Tickets } from './components/Tickets';
import { LoadingFallback } from './flight/page';

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="flex flex-col h-full ">
        <Header />
        <main className="md:px-20  px-4">
          <Hero />
          <Search />
          <Brands />
          <Destinations />
          <Tickets />
          <Packages />
          <Locations />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
