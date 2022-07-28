import React from 'react';
import Logo from '../../assets/Logo.svg';
import MenuIcon from '../../assets/Menu/Icon.svg';
import { useDispatch } from 'react-redux';
import { setMenu } from '../../app/slices/uiSlice';
import { Link, useLocation } from 'react-router-dom';
import NavRoute from './components/NavRoute';
import { useSelector } from 'react-redux';
import { selectModel } from '../../app/slices/modelSlice';

const Navbar = () => {
    const {id} = useSelector(selectModel);
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const handleMenu = () => {
        dispatch(setMenu(true));
    };
    return (
        <nav className='fixed top-0 bottom-0 left-0 right-0 z-10 flex w-screen bg-white h-28 border-b-default border-fade'>
            <ul className='flex items-center justify-between w-full px-5 text-xl'>
                <div className='flex items-center gap-12'>
                    <Link to='/'><li className='mr-10'><img src={Logo} alt="Ego Logo" /></li></Link>
                    <NavRoute path={pathname === '/'} text='Modelos' to="/"/>
                    <NavRoute path={pathname.includes('detail')} text='Ficha de modelo' to={`/detail/${id || 1}`}/>
                </div>
                <li onClick={handleMenu} className='flex gap-3 mr-4 font-normal cursor-pointer text-nav'><span className='hidden sm:block'>Menú</span><span className='font-light'><img src={MenuIcon} alt="Menu Icon" /></span></li>
            </ul>
        </nav>
    );
};

export default Navbar;