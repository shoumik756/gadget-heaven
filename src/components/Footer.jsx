
const Footer = () => {
    return (
        <footer className="py-20">

            <div>
                <h1 className="text-[32px] font-bold text-black text-center">Gadget Heaven</h1>
                <p className="text-center mt-2">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="flex justify-center mt-10">
                <div className=" border border-gray-200 w-[1000px] mb-3"></div>
            </div>

            <div className="footer bg-white text-black p-10 flex justify-around items-center px-[130px]">
                <nav>
                    <h6 className="text-[18px] font-bold text-black">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="text-[18px] font-bold text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="text-[18px] font-bold text-black">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;