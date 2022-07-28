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
        <div className='flex justify-between w-full px-20 pb-4 border-b-default border-fade text-default'>
            <div className='flex items-center justify-center gap-16'>
                <Dropdown handleChange={handleFilter} name='Filtrar por' className={'md:hidden'}/>
                <div className='hidden gap-10 md:flex'>
                    {filterFields.map(({name}, index) => <button className={`${selectedFilter === index && 'bg-gray-100 py-2 px-6 rounded-full'}`} key={`${name} ${index}`} onClick={() => handleClick(index)}>{name}</button>)}
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