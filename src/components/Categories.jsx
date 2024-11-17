/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {
    return (
        <div className="drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
            <div className="">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu bg-white border-2 rounded-3xl text-base-content w-44 p-4">
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            `p-3 pl-5 rounded-3xl ${isActive ? 'bg-[#9538E2] text-white' : ''}`
                        }
                    >
                        All Products
                    </NavLink>
                    {categories.map(category => (
                        <NavLink
                            to={`/category/${category.category}`}
                            className={({ isActive }) =>
                                `p-3 pl-5 rounded-3xl ${isActive ? 'bg-[#9538E2] text-white' : ''}`
                            }
                        >
                            {category.category}
                        </NavLink>
                    ))}
                </ul>
            </div>
           
        </div>
    );
};

export default Categories;
