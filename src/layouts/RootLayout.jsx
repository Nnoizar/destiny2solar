import Header from "../components/Header";
import { Outlet } from "react-router-dom"; // ✅ Required

export default function RootLayout() {
    return (
        <div className="blurred-background-wrapper">
            <div className="background-layer" />
            <div className="content-layer">
                <Header />
                <Outlet />  {/* 👈 This is what renders the page content inside the layout */}
            </div>
        </div>
    );
}
