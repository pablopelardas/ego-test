import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Layout = () => {
    return (
        <main className='font-mont'>
            <Navbar />
            <Outlet />
            <Footer /> 
        </main>
    );
};

export default Layout;