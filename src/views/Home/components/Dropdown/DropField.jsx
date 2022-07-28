import React from 'react';
import propTypes from 'prop-types';

const DropField = ({html, className}) => {
    return (
        <li>
            <p className={`block text-dropdown_field cursor-pointer py-2 px-4 border-solid border-t-default hover:bg-gray-100 ${className}`} dangerouslySetInnerHTML={{__html: html}}/>
        </li>
    );
};

DropField.propTypes = {
    html: propTypes.string.isRequired,
    className: propTypes.string.isRequired,
};

export default DropField;