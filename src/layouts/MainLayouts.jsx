import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div>
            <Toaster/>
            {/* navbar */}
            <div className="px-[120px] pt-6 bg-[#f2f2f2]">
                <Navbar></Navbar>
            </div>

            <div className="min-h-[calc(100vh-328px)]  pb-1 bg-[#f8f8f8] mx-auto -mt-[70px]">
                {/* Dynamic section */}
                <Outlet ></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;