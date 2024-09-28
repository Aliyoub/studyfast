'use client'

import React from 'react';
import { increment, decrement } from '../../store/slices/counterSlice';
import {deleteContent } from '../../store/slices/content/contentSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import Performance from '../../components/chart/chart';


function Home() {
    // const dispatch = useDispatch<AppDispatch>();
    // const count = useSelector((state: RootState) => state.counter.value);
    // const content = useSelector((state: RootState) => state.content.items);

return (

    <Performance />
);
}

export default Home