import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../../../../utils/formatPrice';

const ModelCard = ({model}) => {
    return (
        <article className='h-[182px] w-[268px] flex flex-col items-center'>
            <h2 className='text-card_title font-semibold'>{model.name}</h2>
            <p className='text-card_price'>{model.year} | $ {formatPrice(model.price)}</p>
            <img className='object-cover h-48 w-96' src={model.thumbnail} alt='model'/>
        </article>
    );
};

ModelCard.propTypes = {
    model: PropTypes.object.isRequired
};

export default ModelCard;