import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar";
import TopNav from "./nav/TopNav";

const PageLayout = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default PageLayout;