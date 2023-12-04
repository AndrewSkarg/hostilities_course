import {configureStore} from '@reduxjs/toolkit'
import postSlice from "../features/post/postSlice";
import statisticSlice from '../features/warStatistic/statisticSlice';
export const store = configureStore({
    reducer: {
        post:postSlice,
        statistic:statisticSlice
    },

});