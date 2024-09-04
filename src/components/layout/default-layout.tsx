import { Announcement } from "../general/announcement";
import { Navbar } from "../navigation/navbar";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
    return (
      <div className="min-h-screen">
        <Announcement />
        <Navbar />
        <main>
            <Outlet />
        </main>
      </div>
    );
}