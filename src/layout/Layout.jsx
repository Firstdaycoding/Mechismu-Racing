import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import "./Layout.css";

export default function Layout({ children }) {
    const location = useLocation();
    
    // Standalone dashboard pages (No header / No footer)
    const isDashboard = ["/sponsors", "/contact"].includes(location.pathname);

    return (
        <>
            {!isDashboard && <Navbar />}
            <main className="child">{children}</main>
            {!isDashboard && <Footer />}
        </>
    );
}
