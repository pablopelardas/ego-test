export const filterFields = [
    {
        name: 'Todos',
        cb: () => true,
    },
    {
        name: 'Autos',
        cb: (model) => !model.segment.includes('Pickups') && !model.segment.includes('SUVs'),
    },
    {
        name: 'Pickups y Comerciales',
        cb: (model) => model.segment.includes('Pickups'),
    },
    {
        name: 'SUVs y Crossovers',
        cb: (model) => model.segment.includes('SUVs'),
    }
];


export const orderFields =[
    {
        name: 'Nada',
        cb: () => true,
    },
    {
        name: 'De <b>menor</b> a <b>mayor</b> precio',
        cb: (a,b) => a.price-b.price,
    },
    {
        name: 'De <b>mayor</b> a <b>menor</b> precio',
        cb: (a,b) => b.price-a.price,
    },
    {
        name: 'Más <b>nuevos</b> primero',
        cb: (a,b) => a.year-b.year,
    },
    {
        name: 'Más <b>viejos</b> primero',
        cb: (a,b) => b.year-a.year,
    }
];
