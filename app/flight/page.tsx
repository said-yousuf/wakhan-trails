import Footer from '../components/Footer';
import Header from '../components/Header';
import { Search } from '../components/Search';

export default function Flight() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow pt-42 w-full bg-[#F4F5F8] pb-5">
        <Search />
      </main>
      <Footer />
    </div>
  );
}
