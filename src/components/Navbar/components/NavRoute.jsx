import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavRoute = ({path, text, to}) => {
    return (
        <div className='hidden sm:flex flex-col justify-center items-center w-[150px]'>
            <Link to={to}>
                <li className={`font-semibold text-default ${path && 'text-actual_page'}`}>{text}</li>
            </Link>
            <hr className={`${path ? 'visible' : 'invisible'} border-solid border-b-4 absolute bottom-0 border-actual_page w-[175px]`}></hr>
        </div>
    );
};

NavRoute.propTypes = {
    path: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    to: propTypes.string.isRequired
};

export default NavRoute;