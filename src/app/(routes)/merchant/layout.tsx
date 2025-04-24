import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default function MerchantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        <aside className="w-72 p-4 border-r-2 sticky left-0 overflow-y-auto hidden md:block">
          <SideBar />
        </aside>
        <main className="flex-1 md:p-8 p-0 max-w-screen-lg">{children}</main>
      </div>
    </div>
  );
}
