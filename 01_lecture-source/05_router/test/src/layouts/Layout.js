import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';

function Layout() {
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    );
}

export default Layout;