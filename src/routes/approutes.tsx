import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Headers from '../components/meta/headers';
import { NotFound } from "../pages/not_found";
import LowProfile from "../pages/lowprofile";

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
                path="/lowprofile" 
                element={
                    <>
                    <Headers title='100xtome' description='low profile page'></Headers>
                    <LowProfile />
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
