import React from 'react';
import propTypes from 'prop-types';

const DropField = ({html, className, onClick, index}) => {
    return (
        <li>
            <p onClick={(e) => onClick(e,index)} className={`block text-dropdown_field cursor-pointer py-2 px-4 border-solid border-t-default hover:bg-gray-100 ${className}`} dangerouslySetInnerHTML={{__html: html}}/>
        </li>
    );
};

DropField.propTypes = {
    html: propTypes.string.isRequired,
    className: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    index: propTypes.number.isRequired
};

export default DropField;