const formatPrice = (price) => {
    return Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price).slice(1, -3);
};

export default formatPrice;