import React from 'react';
import Logo from '../../assets/Logo.svg';
import MenuIcon from '../../assets/Menu/Icon.svg';
import { useDispatch } from 'react-redux';
import { setMenu } from '../../app/slices/uiSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const handleMenu = () => {
        dispatch(setMenu(true));
    };
    return (
        <nav className='h-28 w-screen fixed bottom-0 left-0 right-0 top-0 flex border-b-default border-fade pb-4 bg-white'>
            <ul className='w-full flex justify-between items-center px-5 text-xl'>
                <div className='flex items-center gap-12'>
                    <li><img src={Logo} alt="Ego Logo" /></li>
                    <li className='invisible sm:visible font-semibold text-default'>Modelos</li>
                    <li className='invisible sm:visible font-semibold text-default'>Ficha de modelo</li>
                </div>
                <li onClick={handleMenu} className='font-normal text-nav flex gap-3'><span className='hidden sm:block'>Menú</span><span className='font-light'><img src={MenuIcon} alt="Menu Icon" /></span></li>
            </ul>
        </nav>
    );
};

export default Navbar;