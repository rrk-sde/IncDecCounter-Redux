import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCount } from '../actions'


const DecrementButton = () => {
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrementCount());
    };
    return (
        <button onClick={handleDecrement}>-</button>
    )
}

export default DecrementButton