import React from 'react';
import propTypes from 'prop-types';

const svg = <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M5.92007 3.1443C5.91947 3.32914 5.80516 3.49508 5.63055 3.56553C5.45593 3.63583 5.25492 3.59687 5.12081 3.46711L3.10735 1.50345L1.0939 3.46711C0.908182 3.62265 0.630361 3.6124 0.457548 3.44309C0.284134 3.27421 0.273483 3.00311 0.432946 2.82164L2.77688 0.533124C2.95974 0.355755 3.25496 0.355755 3.43783 0.533124L5.78176 2.82164C5.86966 2.90688 5.91947 3.02302 5.92007 3.1443Z" fill="black"/>
</svg>
;


const ArrowUp = ({className}) => {
    return (
        <span className={className}>
            {svg}
        </span>
    );
};

ArrowUp.propTypes = {
    className: propTypes.string,
};

export default ArrowUp;