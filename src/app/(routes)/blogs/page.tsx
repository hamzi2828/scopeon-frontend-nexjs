//src/app/(routes)/blogs/page.tsx

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AllBlogs from "./component/AllBlogs";

export default function BlogsPage() {
  return (
    <main>
         <NavBar />
         <AllBlogs />
         <Footer />
    </main>
  );
}