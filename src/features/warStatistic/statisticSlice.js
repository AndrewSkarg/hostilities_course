
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import data from './statisticSlice.json';

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
const initialState = {
    statistic:{}
}



export const getStatistics = createAsyncThunk(
    'statistics/getStatistics',
    async (_, { rejectWithValue, dispatch }) => {
        // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // dispatch(setPosts(res.data));
        dispatch(setStatistics(data.data));
    })

export const deleteStatisticById = createAsyncThunk(
    'statistics/deleteStatisticById',
    async (id, { rejectWithValue, dispatch }) => {
        // await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        // dispatch(deletePost(id));
        dispatch(deleteStatistics(id))
    }



)
export const statisticSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        setStatistics: (state, action) => {
            state.statistics = action.payload;
        },
        deleteStatistics: (state, action) => {
            state.statistics = state.statistics.filter((statistic) => statistic.id !== action.payload)
        },

        // findPost: (state, action) => {
        //     state.posts = state.posts.filter((post) => post.title === action.payload)

        // }
    },
    extraReducers: {
        // [getPosts.fulfilled]: () => console.log('getPosts fullfiled'),
        // [getPosts.pending]: () => console.log('getPosts pending'),
        // [getPosts.rejected]: () => console.log('getPosts rejected'),
        // [deletePostById.fulfilled]: () => console.log('deletePost fullfiled'),
        // [deletePostById.pending]: () => console.log('deletePost pending'),
        // [deletePostById.rejected]: () => console.log('deletePost rejected'),


    }

})




export const { setStatistics, deleteStatistics } = statisticSlice.actions;
export default statisticSlice.reducer;