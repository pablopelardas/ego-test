import { apiSlice } from '../app/api/apiSlice';
import { setModel, setModels } from '../app/slices/modelSlice';

export const modelsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getModels: builder.query({
            query: () => {
                let url = '/models';
                return {url};
            },
            async onQueryStarted(query, {dispatch, queryFulfilled}) {
                try{
                    const {data} = await queryFulfilled;
                    console.log(data);
                    dispatch(setModels(data));
                }catch(e){
                    console.log('Error fetching models');
                    console.log(e);
                }
            }
        }),
        getModelDetail: builder.query({
            query: (id) => {
                let url = `/models/${id}`;
                return {url};
            },
            async onQueryStarted(query, {dispatch, queryFulfilled}) {
                try{
                    const {data} = await queryFulfilled;
                    console.log(data);
                    dispatch(setModel(data));
                }catch(e){
                    console.log('Error fetching models');
                    console.log(e);
                }
            }
        }),
    }),
});

export const { useGetModelsQuery, useGetModelDetailQuery} = modelsApiSlice;