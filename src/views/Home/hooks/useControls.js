import { useEffect, useState } from 'react';
import { filterFields, orderFields } from '../../../constants/dropdown.js';

const useControls = (models, setFilteredModels) => {
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [selectedOrder, setSelectedOrder] = useState(0);

    const handleFilter = optionIndex => setSelectedFilter(optionIndex);
    const handleOrder = optionIndex => setSelectedOrder(optionIndex); 

    useEffect(() => {
        if (models && models.length) {
            setFilteredModels(
                models
                    .filter(filterFields[selectedFilter].cb)
                    .sort(orderFields[selectedOrder].cb)
            );
        }
    }, [ selectedFilter, selectedOrder]);

    return { handleFilter , handleOrder };
};

export default useControls;