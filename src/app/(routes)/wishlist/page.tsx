//src/app/(routes)/wishlist/page.tsx

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import WishCards from "./component/WishCard";

export default function WishListPage() {
  return (
    <main>
         <NavBar />
         <WishCards />
         <Footer />
    </main>
  );
}