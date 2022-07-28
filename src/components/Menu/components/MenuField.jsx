import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const MenuField = ({field}) => {
    return (
        <Link className='appearance-none' to={field.url || '#'}>
            <p className='text-menu_field hover:bg-slate-300 hover:p-2'>{field.name}</p>
        </Link>
    );
};

MenuField.propTypes = {
    field: propTypes.object.isRequired
};

export default MenuField;