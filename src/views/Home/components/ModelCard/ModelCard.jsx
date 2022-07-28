import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectModel} from '../../../../app/slices/modelSlice.js';

const ModelCard = ({model}) => {
    const [selected, setSelected] = React.useState(false);
    const storeModel = useSelector(selectModel);
    const navigate = useNavigate();   

    React.useEffect(() => {
        if (storeModel.id === model.id) {
            setSelected(true);
        }
    }, [storeModel]);
    return (
        <article onClick={() => navigate(`/detail/${model.id}`)} className='h-[182px] w-[268px] flex flex-col items-center cursor-pointer relative'>
            <h2 className={`text-card_title font-semibold ${selected && 'text-selected_name'}`}>{model.name}</h2>
            <p className='mt-2 text-card_price'>{model.year} | {formatPrice(model.price)}</p>
            <img className='object-cover h-48 w-96' src={model.thumbnail} alt='model'/>
            {selected && <button className='w-[152px] h-[34px] absolute bottom-[-20px] bg-soft_black text-selected_button rounded-[4rem] hover:bg-white hover:border-stone-900 hover:border-2 hover:text-soft_black'>Ver Modelo</button>}
        </article>
    );
};

ModelCard.propTypes = {
    model: PropTypes.object.isRequired
};

export default ModelCard;