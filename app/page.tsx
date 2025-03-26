import { Brands } from './components/Brands';
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Locations } from './components/Locations';
import { Packages } from './components/Packages';
import { Search } from './components/Search';
import { Tickets } from './components/Tickets';

export default function Home() {
  return (
    <div className="flex flex-col h-full md:px-20 md:py-5 px-5">
      <Header />
      <Hero />
      <Search />
      <Brands />
      <Destinations />
      <Tickets />
      <Packages />
      <Locations />
      <Footer />
    </div>
  );
}
