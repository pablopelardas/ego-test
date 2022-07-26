const formatPrice = (price) => {
    return Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(price).slice(0, -3);
};

export default formatPrice;