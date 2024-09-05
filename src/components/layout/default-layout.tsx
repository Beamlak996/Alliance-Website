import { Announcement } from "../general/announcement";
import { Footer } from "../general/footer";
import { Navbar } from "../navigation/navbar";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="min-h-screen">
      <Announcement />
      <Navbar />
      <main className="bg-gradient-to-r from-rose-50 to-gray-100 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
