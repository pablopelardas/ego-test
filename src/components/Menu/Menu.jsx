import React from 'react';
import Close from '../../assets/Botones/Close.svg';
import MenuSection from './components/MenuSection';
import propTypes from 'prop-types';
import { fields } from '../../constants/menu';
import { useSelector, useDispatch } from 'react-redux';
import { selectMenu } from '../../app/slices/uiSlice';
import { setMenu } from '../../app/slices/uiSlice';

const Menu = () => {
    const menu = useSelector(selectMenu);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setMenu(false));
    };
    return (
        <aside className={`${menu ? 'flex' : 'hidden'} w-full flex flex-col h-auto max-w-[425px] bg-white min-h-[80vh] fixed top-[70px] sm:top-0 right-0 `}>
            <div onClick={handleClose} className='flex gap-3 justify-end pr-5 mt-5 text-default w-min self-end'>
                <span>Cerrar</span>
                <img className='w-4 h-4 self-center' src={Close} alt='close menu'/> 
            </div>
            <div className='flex flex-col h-full justify-center sm:mt-10'>
                <MenuSection fields={fields[0]}/> 
                <MenuSection fields={fields[1]}/> 
                <MenuSection fields={fields[2]}/>
                <MenuSection fields={fields[3]} fade={true}/>
            </div>
        </aside>
    );
};

Menu.propTypes = {
    isOpen: propTypes.bool
};



export default Menu;