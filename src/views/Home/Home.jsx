import React, {useState, useEffect} from 'react';
import ModelsContainer from './components/ModelsContainer/ModelsContainer';
import Controls from './components/Controls/Controls';
import { selectModels, setModel } from '../../app/slices/modelSlice';
import { useSelector } from 'react-redux';

const Home = () => {
    const storeModels = useSelector(selectModels);
    const [models,setModels] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        if (storeModels.length) {
            setModels(storeModels);
            setLoading(false);
        }
    },[storeModels]);

    // Loader
    const content = loading ? <div>Loading...</div> : <ModelsContainer models={models} />;

    return (
        <section className='mt-28 w-full min-h-[89vh] 2xl:w-[80vw] 2xl:mx-auto'>
            <section className='flex flex-col justify-between items-center gap-8'>
                <div className='w-11/12 mt-16'>
                    <h1 className='font-bold text-title md:text-title_desktop'>Descubrí todos los modelos</h1>
                </div>
                <Controls models={models} setModels={setModels}/>
            </section>
            {content}
        </section>
    );
};

export default Home;