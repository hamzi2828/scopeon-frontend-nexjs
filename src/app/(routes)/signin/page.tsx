//src/app/(routes)/Signin/page.tsx
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SignIn from "./component/SignIn";

export default function Signin() {
  return (
    <main>
         <NavBar />
         <SignIn />
         <Footer />
    </main>
  );
}