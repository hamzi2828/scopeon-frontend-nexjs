//src/app/(routes)/recentViewed/page.tsx
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import RecentViewed from "./component/recentViewed";

export default function RecentViewedPage() {
  return (
    <main>
         <NavBar />
         <RecentViewed />
         <Footer />
    </main>
  );
}