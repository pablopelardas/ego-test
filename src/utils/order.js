export const order = {
    0: () => true,
    1: (a,b) => a.price-b.price,
    2: (a,b) => b.price-a.price,
    3: (a,b) => a.year-b.year,
    4: (a,b) => b.year-a.year,
};