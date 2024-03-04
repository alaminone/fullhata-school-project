import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";
import Footer from "../Page/HomePage/footer/Footer";


const PageLayout = () => {
    return (
        <div>
          
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PageLayout;