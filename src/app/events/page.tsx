import { Inter } from "@next/font/google";
import Sidebar from "./Sidebar";
import Featured from "./Featured";
import SearchList from "./SearchList";
import { SidebarProvider } from "@/contexts/SidebarContext";
import SideDrawer from "./SideDrawer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex flex-1 relative">
        {/* Visible on screens with min-width: 1024px */}
        <aside className="max-lg:hidden w-80">
          <Sidebar />
        </aside>
        {/* Visible on mobile only */}
        <SideDrawer />
        <div></div>
        <main className="flex-1 bg-white p-4 h-[calc(100vh-8rem)] overflow-auto">
          <Featured />

          <SearchList />
        </main>
      </div>
    </SidebarProvider>
  );
}

