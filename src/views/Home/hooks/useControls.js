import { useEffect, useState } from 'react';
import { filters } from '../../../utils/filters';
import { order } from '../../../utils/order';

const useControls = (models, setFilteredModels) => {
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [selectedOrder, setSelectedOrder] = useState(0);

    const handleFilter = optionIndex => setSelectedFilter(optionIndex);
    const handleOrder = optionIndex => setSelectedOrder(optionIndex); 

    useEffect(() => {
        if (models && models.length) {
            setFilteredModels(
                models
                    .filter(filters[selectedFilter])
                    .sort(order[selectedOrder])
            );
        }
    }, [ selectedFilter, selectedOrder]);

    return { handleFilter , handleOrder };
};

export default useControls;