import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';
import "./Layout.css";

function Layout() {
    return (
        <div className="layout">
            <Header />
            <Navbar />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
