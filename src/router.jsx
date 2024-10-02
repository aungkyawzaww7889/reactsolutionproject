import React from "react";
import DashboardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import Layout from "./components/Layout.jsx";
import NotFoundPage from "./pages/NotFoundPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Layout/>,
            errorElement: <NotFoundPage/>,
            children : [
                {   
                    index:true,
                    path:"/dashboard",
                    element: <DashboardPage/>
                },
                {
                    path:"/product",
                    element: <ProductPage/>
                },
                {
                    path:"/sale",
                    element: <SalePage/>
                },
                {
                    path:"/voucher",
                    element: <VoucherPage/>
                }
            ]
        }
    ]
);

export default router;