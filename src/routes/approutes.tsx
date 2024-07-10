import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Products from "../pages/products";
import Headers from '../components/meta/headers';
import { NotFound } from "../pages/not_found";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                    <Headers title='Home' description='Home Page'></Headers>
                    <Home />
                    </>
                } 
            />
            <Route 
                path="/home" 
                element={
                    <>
                    <Headers title='Home' description='Home Page'></Headers>
                    <Home />
                    </>
                } 
            />
            <Route 
                path="/products" 
                element={
                    <>
                    <Headers title='Products' description='Products'></Headers>
                    <Products />
                    </>
                } 
            />
            <Route path="*" element={
                <>
                <Headers title='No Found' description='No Found'></Headers>
                <NotFound />
                </>
                }
            />
        </Routes>
    );
};
