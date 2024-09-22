
'use client'
import React from 'react';
import { increment, decrement } from '../../store/slices/counterSlice';
import {deleteContent } from '../../store/slices/content/contentSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';


function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: RootState) => state.counter.value);
    const content = useSelector((state: RootState) => state.content.items);

return (
    <>
    {console.log('content', content)}
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(deleteContent(1))}>deleteContent</button>
    </>
);
}

export default Home