import { apiSlice } from '../app/api/apiSlice';
import { setModels } from '../app/slices/modelSlice';

export const modelsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getModels: builder.query({
            query: () => {
                let url = '/models';
                return {url};
            },
            async onQueryStarted(query, {dispatch, queryFulfilled}) {
                try{
                    console.log('query started');
                    const {data} = await queryFulfilled;
                    console.log(data);
                    dispatch(setModels(data));
                }catch(e){
                    console.log('Error fetching models');
                    console.log(e);
                }
            }
        })
    }),
});

export const { useGetModelsQuery} = modelsApiSlice;