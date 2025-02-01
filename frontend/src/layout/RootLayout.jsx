import Navbar from "../components/nav/Navbar.jsx";
import {Outlet} from "react-router";

import styles from "./RootLayout.module.css";
import Footer from "../components/footer/Footer.jsx";

function RootLayout() {
    return (
        <>
            <Navbar />
            <div className={styles.outletContainer}>
                <Outlet/>
                <Footer/>
            </div>
        </>
    );
}

export default RootLayout;