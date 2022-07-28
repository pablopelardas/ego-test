import React, {useState, useEffect} from 'react';
import propTypes from 'prop-types';
import ArrowDown from '../../../../assets/Botones/ArrowDown.jsx';
import ArrowUp from '../../../../assets/Botones/ArrowUp.jsx';
import DropField from './DropField.jsx';
import { orderFields, filterFields } from '../../../../constants/dropdown.js';

const Dropdown = ({name}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState(false);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (name.includes('Filtrar')) {
            setFilter(true);
        }
    },[name]);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {filter  && <button className="p-3 justify-center items-center gap-3 font-semibold text-default hidden md:flex cursor-default" type="button">{name}</button>}
            <button onClick={toggle} className={`p-3 flex justify-center items-center gap-3 font-semibold text-default ${filter && 'md:hidden'}`} type="button">{name}{!isOpen ? <ArrowDown /> : <ArrowUp />}</button>
            <div className={`z-10 w-62 flex justify-center bg-white rounded divide-y divide-gray-500 shadow dark:bg-gray-800 absolute p-4 ${!isOpen && 'hidden'}`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {
                        filter
                            ? filterFields.map((field, index) => <DropField key={`${field} ${index}`} html={field} className={index==selected && 'bg-gray-100'} />)
                            : orderFields.map((field, index) => <DropField key={`${field} ${index}`} html={field} className={index==selected && 'bg-gray-100'}/>)
                    }
                </ul>
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    name: propTypes.string.isRequired,
    fields: propTypes.array.isRequired,
};

export default Dropdown;