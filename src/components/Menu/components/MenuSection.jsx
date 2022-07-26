import React from 'react';
import propTypes from 'prop-types';
import MenuField from './MenuField';

const MenuSection = ({fields, fade=false}) => {
    return (
        <section className={`border-b-default border-fade py-6 ${fade && 'bg-fade sm:h-screen'} text-right pr-12 sm:py-10`}>
            {fields.map(field => (
                <MenuField key={field.name} field={field} />
            ))}
        </section>
    );
};

MenuSection.propTypes = {
    fields: propTypes.array.isRequired,
    fade: propTypes.bool
};

export default MenuSection;