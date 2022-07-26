import React from 'react';
import '../dist/App.css';
import {Route, Routes} from 'react-router-dom';
import Layout from './views/Layout/Layout';
import Home from './views/Home/Home';
import {useGetModelsQuery} from './services/modelsApiSlice.js';

function App() {
    useGetModelsQuery();
    return (
        <Routes>
            <Route path='/*' element={<Layout />} >
                <Route index element={<Home />} />
                {/* <Route path='/detail' element={<ModelDetail />} /> */}
            </Route>
        </Routes>
    );
}

export default App;
