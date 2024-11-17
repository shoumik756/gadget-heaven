
import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, addWishList, getWishList } from "../utils";
import { Helmet } from "react-helmet";
const GadgetDetails = () => {
    const allGadgetsData = useLoaderData()
    const { product_id } = useParams();
    const [gadget, setGadget] = useState({})
    const [isWishList, setISWishList]=useState(false)
    useEffect(() => {
        const singleData = allGadgetsData.find(gadget => gadget.product_id == product_id)
        setGadget(singleData)
        const wishList = getWishList()
        const isExist = wishList.find(item => item.product_id == singleData.product_id);
        if(isExist){
            setISWishList(true)
        }

    }, [allGadgetsData, product_id])
    const handleCart = (gadget)=>{
        addToCart(gadget)
        
    }
    const handleWishList = (gadget)=>{
        addWishList(gadget)
        setISWishList(true)
    }

    return (
        <div >
             <Helmet>
                <title>Gadget Details | Gadgets Heaven</title>
            </Helmet>
            <div className=" p-10 bg-[#9538E2] mt-[70px] min-h-[300px] ">
                <div className="flex justify-center">
                    <div className="space-y-5">
                        <h1 className="text-5xl text-center font-bold text-white">Product Details</h1>
                        <p className="text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    </div>
                </div>

            </div>
            <div className=" bg-white border -mt-28 rounded-3xl max-w-screen-lg mx-auto mb-20">
                <div className="flex gap-10 p-5">
                    <img
                        src={gadget.product_image}
                        className="max-w-sm rounded-lg " />
                    <div className="space-y-2">
                        <h1 className="text-[28px] font-semibold">{gadget.product_title}</h1>
                        <h1 className="text-[20px] font-semibold">Price: ${gadget.price}</h1>
                        <h1>
                            {gadget.availability && (
                                <span className="badge p-3 bg-[#cfffcc] border-2 border-[#309C08]">In Stock</span>
                            )}
                            {!gadget.availability && (
                                <span className="badge p-3 bg-[#ffcccc] border-2 border-[#9c0808]">Out of Stock</span>
                            )}
                        </h1>
                        <p>{gadget.description}</p>
                        <h1>
                            {gadget.Specification && (
                                <ol className="mt-4 text-left list-decimal list-inside">
                                    {gadget.Specification.map((spec, index) => (
                                        <li key={index}>
                                            {spec}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </h1>
                        <p className="flex items-center gap-2">Rating <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                        </div></p>
                        <div className="flex items-center gap-5">
                            <div className="rating rating-sm gap-2">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-200" />

                            </div>
                            <div className="border-2 w-[50px] h-[30px] flex justify-center items-center bg-white rounded-3xl">
                                {gadget.rating}
                            </div>
                        </div>
                        <div className="flex  items-center gap-5">
                            <button  onClick={()=> handleCart(gadget)} className="flex justify-center items-center gap-3 bg-[#9538E2] w-[193px] h-[48px] text-white font-semibold rounded-[32px]">Add To Card <IoCartOutline /></button>
                            <button disabled={isWishList} onClick={()=> handleWishList(gadget)} className={` ${isWishList ? 'bg-[#f2f2f2]' : 'bg-white'} flex justify-center items-center text-2xl border-2 h-[48px] w-[48px] rounded-full`}>
                                <CiHeart />
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;