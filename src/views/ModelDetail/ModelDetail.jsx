import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetModelDetailQuery } from '../../services/modelsApiSlice.js';
import Slider from './components/Slider.jsx';
import DetailCard from './components/DetailCard.jsx';
const ModelDetail = () => {
    const { id } = useParams();
    const { data: model, isLoading } = useGetModelDetailQuery(id, {refetchOnMountOrArgChange: true});
    
    const content = isLoading ? <div>Loading...</div>
        : (
            <>
                <DetailCard model={model} type={'main'}/>
                <section className='w-full pl-5'>
                    <Slider modelFeatures={model.model_features}/>
                </section>
                <section className='py-10 flex flex-col items-center gap-5'>
                    <DetailCard model={model.model_highlights[0]} type={'card1'}/>
                    <DetailCard model={model.model_highlights[1]} type={'card2'}/>
                </section>
            </>
        ) ;

    return (
        <section className='mt-28 w-full min-h-[85vh] flex flex-col items-center '>
            {content}
        </section>
    );
};

export default ModelDetail;