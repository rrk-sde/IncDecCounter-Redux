import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementCount } from '../actions'


const IncrementButton = () => {

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCount());
    };

    return (
        <button onClick={handleIncrement}>+</button>
    )
}

export default IncrementButton