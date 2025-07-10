import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main className = "px-6 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;