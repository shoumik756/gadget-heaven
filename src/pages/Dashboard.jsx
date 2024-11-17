import { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { getAllCart, getWishList } from "../utils";
import { MdOutlineCancel } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import group from '../assets/Group.png'

const Dashboard = () => {
    const [gadget, setGadget] = useState([]);
    const [wishListGadget, setWishListGadget] = useState([]);
    const [defaultTab, setDefaultTab] = useState('cart');
    const [sortedGadgets, setSortedGadgets] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalTotalPrice, setModalTotalPrice] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        const cart = getAllCart();
        setGadget(cart);
        setSortedGadgets(cart);
    }, []);

    useEffect(() => {
        const wishList = getWishList();
        setWishListGadget(wishList);
    }, []);

    const handleSort = () => {
        const sorted = [...gadget].sort((a, b) => b.price - a.price);
        setSortedGadgets(sorted);
    };

    const handlePurchase = () => {
        const total = sortedGadgets.reduce((modalTotal, gadget) => modalTotal + gadget.price, 0);
        setModalTotalPrice(total);
        setSortedGadgets([]);
        setGadget([]); 
        localStorage.removeItem('cart'); 
        setIsOpenModal(true);
        toast.success("Purchase Completed Successfully.");
    };

    const handleModalClose = () => {
        setIsOpenModal(false);
        navigate('/');
    };

    const totalPrice = sortedGadgets.reduce((totalCost, gadget) => totalCost + gadget.price, 0);

    return (
        <div>
            <Helmet>
                <title>DashBoard | Gadgets Heaven</title>
            </Helmet>
            <div className="hero bg-[#9538E2] mt-[70px] min-h-[300px] ">
                <div className="hero-content text-center">
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold text-white">Dashboard</h1>
                        <p className="text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                            the coolest accessories, we have it all!
                        </p>
                        <div>
                            <button onClick={() => setDefaultTab('cart')} className={`w-[170px] h-[50px] rounded-[32px] border-2 border-white font-semibold mr-5 ${defaultTab === 'cart' ? 'bg-white text-[#9538E2]' : 'text-white'}`}> Cart</button>
                            <button onClick={() => setDefaultTab('wishlist')} className={`w-[170px] h-[50px] rounded-[32px] border-2 border-white font-semibold ${defaultTab === 'wishlist' ? 'bg-white text-[#9538E2]' : 'text-white'}`}>WishList</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto mt-10 mb-20">
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-[24px] font-bold">{defaultTab === 'cart' ? 'Cart' : 'WishList'}</h1>
                        {defaultTab === 'cart' && (
                            <div className="flex items-center gap-5">
                                <h1 className="text-[24px] font-bold">
                                    Total Cost: ${totalPrice.toFixed(2)}
                                </h1>
                                <div className="flex">
                                    <button onClick={handleSort}
                                        className="flex justify-center items-center gap-2 w-[180px] h-[50px] rounded-[32px] border-2 border-[#9538E2] text-[#9538E2] font-normal mr-5"
                                    >
                                        Sort by Price <GiSettingsKnobs />
                                    </button>
                                    <button
                                        onClick={handlePurchase}
                                        disabled={totalPrice === 0} 
                                        className={`w-[170px] h-[50px] rounded-[32px] border-2 ${totalPrice === 0 ? 'bg-gray-300 text-gray-500' : 'bg-[#9538E2] text-white'} font-normal`}
                                    >
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mt-10">
                        {(defaultTab === 'cart' ? sortedGadgets : wishListGadget).map(gadget => (
                            <div key={gadget.product_id} className="flex items-center gap-10 mb-10 bg-white border-2 rounded-[32px]">
                                <div className="w-[300px] h-[200px] p-5">
                                    <img className="w-[300px] rounded-[16px] h-full" src={gadget.product_image} alt={gadget.product_title} />
                                </div>
                                <div className="w-[500px] space-y-2">
                                    <h1 className="text-[24px] font-semibold">{gadget.product_title}</h1>
                                    <p>{gadget.description}</p>
                                    {defaultTab === 'cart' ? (
                                        <p className="text-[20px] font-semibold">Price: ${gadget.price}</p>
                                    ) : (
                                        <button
                                            className="mt-2 w-[150px] h-[40px] bg-[#9538E2] text-white rounded-[20px] hover:bg-[#8424bc]"
                                        >
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                                <div className="text-[50px] text-red-600 ml-[300px] -mt-28">
                                    <MdOutlineCancel />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <dialog id="my_modal_1" className={`modal ${isOpenModal ? 'modal-open' : ''}`}>
                <div className="modal-box flex flex-col items-center text-center p-5">
                    <img className="mb-5 size-[100px]" src={group} alt="" />
                    <h3 className="font-bold text-lg mb-3">Payment Successfully</h3>
                    <div className="border border-black w-[200px] mb-3"></div>
                    <p className="py-2 text-gray-600 mb-3">Thanks for purchasing.</p>
                    <p className="font-semibold text-lg mb-3">Total: ${modalTotalPrice.toFixed(2)}</p>
                    <div className="modal-action w-full flex justify-center mb-3">
                        <button onClick={handleModalClose} className="w-[150px] h-[40px] mt-4 bg-gray-200 rounded-full text-gray-700 font-semibold hover:bg-gray-300">Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;