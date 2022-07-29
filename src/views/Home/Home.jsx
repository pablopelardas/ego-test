import React, {useState, useEffect} from 'react';
import ModelsContainer from './components/ModelsContainer/ModelsContainer';
import Controls from './components/Controls/Controls';
import { selectModels } from '../../app/slices/modelSlice';
import { useSelector } from 'react-redux';
import useControls from './hooks/useControls';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const storeModels = useSelector(selectModels);
    const [models,setModels] = useState([]);
    const [loading,setLoading] = useState(true);
    const {  handleFilter, handleOrder } = useControls(storeModels, setModels);

    useEffect(() => {
        if (storeModels.length) {
            setModels(storeModels);
            setLoading(false);
        }
    },[storeModels]);

    // Loader
    const content = loading ? <Loader/> : <ModelsContainer models={models} />;

    return (
        <section className='mt-28 w-full min-h-[89vh] 2xl:w-[80vw] 2xl:mx-auto'>
            <section className='flex flex-col items-center justify-between gap-8'>
                <div className='w-11/12 mt-16'>
                    <h1 className='font-bold text-title md:text-title_desktop'>Descubrí todos los modelos</h1>
                </div>
                {!loading && <Controls handleFilter={handleFilter} handleOrder={handleOrder}/>}
            </section>
            {content}
        </section>
    );
};

export default Home;