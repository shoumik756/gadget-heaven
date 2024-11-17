 
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";
import { useEffect, useState } from "react";



const AllGadgetsCard = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [gadgets, setGadgets] = useState([])
    
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(
                gadget => gadget.category === category
            )
            setGadgets(filteredByCategory)
            
        }
        else {
            setGadgets(data)
        }
    }, [category, data])

    return (
        <div>
            {gadgets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {gadgets.map(gadget => (
                        <Gadget key={gadget.id} gadget={gadget} />
                        
                    ))}
                    
                </div>
            ) :
                (
                    <h1 className="text-center text-5xl text-[#9538E2] font-semibold">No Products Here</h1>
                )}
        </div>
    );
};

export default AllGadgetsCard;