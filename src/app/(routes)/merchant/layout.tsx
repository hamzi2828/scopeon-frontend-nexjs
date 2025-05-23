import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default function MerchantLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <aside className="w-64 p-4 border-r-2 sticky left-0 overflow-y-auto hidden md:block">
          <SideBar />
        </aside>
        <main className="flex-1 p-12 max-w-screen-2xl">{children}</main>
      </div>
    </div>
  );
}
