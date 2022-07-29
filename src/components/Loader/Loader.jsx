import React from 'react';
import { ThreeCircles } from  'react-loader-spinner';


const Loader = () => {
    return (
        <div className='fixed top-0 left-0 z-20 grid w-full h-full place-content-center'>
            <ThreeCircles
                outerCircleColor='#efeeef' 
                middleCircleColor='#191919' 
                innerCircleColor='#373737' 
            />
        </div>
    );
};

export default Loader;