//src/app/(routes)/cart/page.tsx

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Cart from "./component/Cart";

export default function CartsPage() {
  return (
    <main>
         <NavBar />
         <Cart />
         <Footer />
    </main>
  );
}