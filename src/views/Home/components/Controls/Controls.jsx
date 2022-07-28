import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import propTypes from 'prop-types';
import { filterFields } from '../../../../constants/dropdown';

const Controls = ({handleFilter, handleOrder}) => {
    const [selectedFilter, setSelectedFilter] = React.useState(0);

    const handleClick = (index) => {
        setSelectedFilter(index);
        handleFilter(index);
    };


    return (
        <div className='w-full flex justify-between border-b-default border-fade pb-4 text-default px-20'>
            <div className='flex justify-center items-center gap-16'>
                <Dropdown handleChange={handleFilter} name='Filtrar por' className={'md:hidden'}/>
                <div className='hidden md:flex gap-10'>
                    {filterFields.map((field, index) => <button className={`${selectedFilter === index && 'bg-gray-100 py-2 px-6 rounded-full'}`} key={`${field} ${index}`} onClick={() => handleClick(index)}>{field}</button>)}
                </div>

            </div>
            <Dropdown handleChange={handleOrder} name='Ordenar por' />
        </div>
    );
};

Controls.propTypes = {
    handleFilter: propTypes.func.isRequired,
    handleOrder: propTypes.func.isRequired
};

export default Controls;