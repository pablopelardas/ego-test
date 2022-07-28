import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import propTypes from 'prop-types';
import DetailCard from './DetailCard';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    Desktop: {
        breakpoint: { max: 3000, min: 1440 },
        items: 4
    },
    Tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    Mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slider = ({modelFeatures}) => {
    return (
        <Carousel swipeable={false} responsive={responsive} className=' py-24 bg-fade'>
            {modelFeatures.map((feat, i) => (

                <DetailCard key={i} model={feat} type={'car'}/>
           
            ))}
        </Carousel>
    );
};

Slider.propTypes = {
    modelFeatures: propTypes.array.isRequired
};

export default Slider;


