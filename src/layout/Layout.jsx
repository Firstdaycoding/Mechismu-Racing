import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import "./Layout.css";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="child">{children}</main>
            <Footer />
        </>
    );
}
