import banner from '../assets/banner.jpg'
const HomeBanner = () => {

    return (
        <div>
            <div className="pt-[120px] bg-[#9538E2]  w-11/12 mx-auto h-[690px] rounded-[32px] ">
                <div className=" text-center">
                    <div className=" ">
                        <h1 className="text-[56px] font-bold text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-6 text-white text-base font-normal">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white rounded-[32px] w-[168px] text-[#9538E2]">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto h-[600px] rounded-3xl border-2 border-white -mt-[200px] p-6 bg-[#ffffff23]">
                <img className='w-full h-full rounded-3xl' src={banner} alt="" />
            </div>
            
        </div>
    );
};

export default HomeBanner;