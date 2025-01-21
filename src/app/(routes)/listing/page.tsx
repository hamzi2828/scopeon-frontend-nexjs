//src/app/(routes)/listing/page.tsx

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import ListingCard from "../wishlist/component/Wishlist";
import ListingSearch from "./component/ListingSearch";

export default function ListPage() {
  return (
    <main>
         <NavBar />
         <ListingSearch />
         <ListingCard />
         <Footer />
    </main>
  );
}