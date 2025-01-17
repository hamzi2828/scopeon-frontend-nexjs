//src/app/(routes)/signup/merchant/page.tsx
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import SignUpMerchant from "../component/SignUpMerchant";

export default function Signin() {
  return (
    <main>
         <NavBar />
         <SignUpMerchant />
         <Footer />
    </main>
  );
}