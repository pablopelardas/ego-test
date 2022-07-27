import React from 'react';
import propTypes from 'prop-types';

const DetailCard = ({model, type}) => {
    return (
        <article className={`flex flex-col justify-center w-11/12 ${type !== 'car' && 'sm:flex-row sm:gap-10'} ${type === 'card1' && 'sm:flex-row-reverse'}`}>
            <div className={`flex justify-end ${type !== 'car' && 'sm:w-[300px] lg:w-[500px] 2xl:w-[800px]'}`}>
                <img className={`object-cover h-60 w-full rounded-md ${type !== 'car' ? 'lg:h-[20rem] 2xl:h-[30rem]' :'lg:h-[15rem]'}`}  src={model.photo || model.image} alt='model'/>
            </div>
            <div className={`flex flex-col gap-4 mt-8 ${type !== 'car' && 'sm:w-[300px] lg:w-[500px] 2xl:w-[800px] 2xl:justify-center '}`}>
                {type === 'main' && <h3 className='text-detail_name'>{model.name}</h3>}
                <h2 className={`${type === 'main' ? 'text-detail_title' : 'text-detail_sub'} text-start`}>{model.title || model.name}</h2>
                <p className='text-detail_desc' dangerouslySetInnerHTML={{__html: `${model.description || model.content}`}}/>
            </div>
        </article>
    );
};

DetailCard.propTypes = {
    model: propTypes.object.isRequired,
    type: propTypes.string
};


export default DetailCard;