import React, {useState, useEffect} from 'react';
import ModelsContainer from './components/ModelsContainer/ModelsContainer';
import Header from './components/Header/Header';
import { selectModels } from '../../app/slices/modelSlice';
import { useSelector } from 'react-redux';
import Menu from '../../components/Menu/Menu';

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
        <section className='mt-28 w-full min-h-[89vh]'>
            <Header setModels={setModels}/>
            {content}
        </section>
    );
};

export default Home;