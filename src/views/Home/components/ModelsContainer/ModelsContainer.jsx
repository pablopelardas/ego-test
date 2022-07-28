import React from 'react';
import ModelCard from '../ModelCard/ModelCard';
import PropTypes from 'prop-types';

const ModelsContainer = ({models}) => {
    return (
        <section className='flex flex-wrap justify-center w-11/12 gap-20 mx-auto my-28 2xl:w-8/12'>            
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