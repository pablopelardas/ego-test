import React from 'react';
import propTypes from 'prop-types';

const svg = <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M0.800025 0.855702C0.800624 0.670864 0.914933 0.504919 1.08955 0.43447C1.26416 0.364167 1.46518 0.403126 1.59929 0.532894L3.61274 2.49655L5.6262 0.532894C5.81191 0.377349 6.08973 0.387601 6.26255 0.556914C6.43596 0.725788 6.44661 0.996894 6.28715 1.17836L3.94322 3.46688C3.76035 3.64424 3.46513 3.64424 3.28227 3.46688L0.938335 1.17836C0.850428 1.09312 0.800624 0.976975 0.800025 0.855702Z" fill="black"/>
</svg>;


const ArrowDown = ({className}) => {
    return (
        <span className={className}>
            {svg}
        </span>
    );
};

ArrowDown.propTypes = {
    className: propTypes.string,
};

export default ArrowDown;