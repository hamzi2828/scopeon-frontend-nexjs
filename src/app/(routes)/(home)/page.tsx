// src/app/page.tsx
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import BannerSection from "./component/BannerSection";
import FeaturedListing from "./component/FeaturedListing";
import WorkingCards from "./component/WorkingCards";
import PopularListing from "./component/PopularListing";
import UpcomingEvents from "./component/UpcomingEvents";
import MoreLeadsBanner from "./component/MoreLeadsBanner";
import Blogs from "../../components/Blogs";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="navbanner max-h-screen w-full bg-cover bg-center bg-fixed relative overflow-y-hidden">
        <div className="overlay absolute top-0 bottom-0 left-0 right-0 sm:min-h-screen bg-[#00000099]"></div>
        <BannerSection />
      
      </div>
      <FeaturedListing />
      <WorkingCards />
      <PopularListing />
      <UpcomingEvents />
      <MoreLeadsBanner />
      <Blogs />


      <Footer />
    </main>
  );
}