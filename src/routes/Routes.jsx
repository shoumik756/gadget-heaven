import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import AllGadgetsCard from "../components/AllGadgetsCard";
import GadgetDetails from "../pages/GadgetDetails";
import Login from "../pages/Login";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <div className="flex justify-center items-center flex-col h-[100vh]">
            <h1 className="text-[54px] text-[#9538E2]">404</h1>
            <p className="text-[20px] text-[#9538E2]">Page Not Found</p>
        </div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.JSON'),
                children: [
                    {
                        path: '/',
                        element: <AllGadgetsCard />,
                        loader: () => fetch('../gadgets.JSON'),
                    },
                    {
                        path: '/category/:category',
                        element: <AllGadgetsCard />,
                        loader: () => fetch('../gadgets.JSON'),
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/gadget/:product_id',
                element: <GadgetDetails />,
                loader: () => fetch('../gadgets.JSON'),
            }
        ]
    },
])

export default routes