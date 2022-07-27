import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';

const Layout = () => {
    return (
        <main className='font-mont'>
            <Navbar />
            <Menu />
            <Outlet />
            <Footer /> 
        </main>
    );
};

export default Layout;