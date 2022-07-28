import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Controls = () => {
    return (
        <div className='w-full flex justify-between border-b-default border-fade pb-4 text-default px-20'>
            <div className='flex justify-center items-center gap-16'>
                <Dropdown name='Filtrar por' className={'md:hidden'}/>
                <div className='hidden md:flex gap-10'>
                    <p> Todos </p>
                    <p> Autos </p>
                    <p> Pickups y Comerciales </p>
                    <p> SUVs y Crossovers</p>
                </div>

            </div>
            <Dropdown name='Ordenar por' />
        </div>
    );
};

export default Controls;