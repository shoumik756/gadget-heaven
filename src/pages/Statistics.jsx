import { Helmet } from "react-helmet";

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics | Gadgets Heaven</title>
            </Helmet>
            <div className="hero bg-[#9538E2] mt-[70px] min-h-[270px] ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">Statistics</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto m-20 text-center">
                <h2 className="text-5xl font-bold text-[#9538E2]">Statistics Coming Soon</h2>
            </div>
        </div>
    );
};

export default Statistics;