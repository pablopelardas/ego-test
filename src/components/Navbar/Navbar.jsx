import React from 'react';
import Logo from '../../assets/Logo.svg';
import MenuIcon from '../../assets/Menu/Icon.svg';

const Navbar = () => {
    return (
        <nav className='h-28 w-screen absolute bottom-0 left-0 right-0 top-0 flex bg-slate-500'>
            <ul className='w-full flex justify-between items-center px-5 text-xl'>
                <div className='flex items-center gap-12'>
                    <li><img src={Logo} alt="Ego Logo" /></li>
                    <li className='invisible sm:visible font-semibold text-default'>Modelos</li>
                    <li className='invisible sm:visible font-semibold text-default'>Ficha de modelo</li>
                </div>
                <li className='font-normal text-nav flex gap-3'><span className='invisible sm:visible'>Menú</span><span className='font-light'><img src={MenuIcon} alt="Menu Icon" /></span></li>
            </ul>
        </nav>
    );
};

export default Navbar;