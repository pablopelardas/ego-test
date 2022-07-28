import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

const ModelCard = ({model}) => {
    const [hover, setHover] = React.useState(false);
    const navigate = useNavigate();   

    return (
        <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='h-[182px] w-[268px] flex flex-col items-center relative'>
            <h2 className={`text-card_title font-semibold ${hover && 'text-selected_name'}`}>{model.name}</h2>
            <p className='mt-2 text-card_price'>{model.year} | {formatPrice(model.price)}</p>
            <img className='object-cover h-48 w-96' src={model.thumbnail} alt='model'/>
            {hover && <button onClick={() => navigate(`/detail/${model.id}`)} className='w-[152px] h-[34px] absolute bottom-[-20px] bg-soft_black text-selected_button rounded-[4rem] hover:bg-white hover:border-stone-900 hover:border-2 hover:text-soft_black'>Ver Modelo</button>}
        </article>
    );
};

ModelCard.propTypes = {
    model: PropTypes.object.isRequired
};

export default ModelCard;