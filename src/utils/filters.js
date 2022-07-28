export const filters = {
    0: () => true,
    1: (model) => !model.segment.includes('Pickups') && !model.segment.includes('SUVs'),
    2: (model) => model.segment.includes('Pickups'),
    3: (model) => model.segment.includes('SUVs'),
};