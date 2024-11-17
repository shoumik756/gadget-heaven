/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
const Gadget = ({ gadget }) => {
    const { product_image, product_title, price,product_id } = gadget || {}
    return (
        <div className=" bg-white border rounded-3xl p-5 h-[470px]  ">
            <figure className="w-[300px] flex justify-center items-center">
                <img className="w-full h-[250px] rounded-xl"
                    src={product_image}
                    alt={product_title}/>
            </figure>
            <div className="space-y-5 mt-5">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}k</p>
                <NavLink to={`/gadget/${product_id}`} className="card-actions w-[160px] h-[50px] border-2 border-[#9538E2] flex justify-center items-center rounded-[32px]">
                    <button className="text-[#9538E2] font-medium">View Details</button>
                    
                </NavLink>
            </div>
        </div>
    );
};

export default Gadget;