import React from 'react';
import ArrowDown from '../../../assets/Botones/ArrowDown.svg';

const Header = () => {
    return (
        <section className='flex flex-col justify-between items-center gap-8'>
            <div className='w-[345px] mt-16'>
                <h1 className='font-bold text-title '>Descubrí todos los modelos</h1>
            </div>
            <div className='w-11/12 flex justify-between border-b-2 border-fade pb-4 text-default'>
                <div className='flex gap-10'>
                    <p className='flex gap-2 font-medium'>Filtrar por <img className='sm:hidden' src={ArrowDown} alt='arrow-down'/></p>
                    <div className='hidden sm:flex gap-10'>
                        <p> Todos </p>
                        <p> Autos </p>
                        <p> Pickups y Comerciales </p>
                        <p> SUVs y Crossovers</p>
                    </div>
                </div>
                <p className='flex gap-2 font-medium'>Ordenar por <img className='sm:hidden' src={ArrowDown} alt='arrow-down'/></p>
            </div>
        </section>
    );
};

export default Header;