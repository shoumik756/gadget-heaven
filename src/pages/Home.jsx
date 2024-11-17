import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import HomeBanner from "../components/HomeBanner";
import { Helmet } from "react-helmet";

const Home = () => {
    const categories = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Gadgets | Gadgets Heaven</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <div className="py-[80px] pb-10 text-[40px] font-bold text-black flex justify-center">
                <h2>Explore Cutting-Edge Gadgets</h2>
            </div>
            <div className="max-w-screen-xl mx-auto gap-5 flex mb-20">
                <Categories categories={categories} />
                <Outlet />
            </div>
        </div>
    );
};

export default Home;