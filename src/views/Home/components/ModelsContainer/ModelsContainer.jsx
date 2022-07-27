import React from 'react';
import ModelCard from '../ModelCard/ModelCard';
import PropTypes from 'prop-types';

const ModelsContainer = ({models}) => {
    return (
        <section className='w-11/12 mx-auto mt-28 flex justify-center flex-wrap gap-20 2xl:w-8/12'>            
            {models.map(model => (
                <ModelCard key={model.id} model={model} />
            ))}
        </section>
    );
};

ModelsContainer.propTypes = {
    models: PropTypes.array.isRequired
};

export default ModelsContainer;