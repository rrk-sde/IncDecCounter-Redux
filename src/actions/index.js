import React from 'react'

export const incrementCount = () => {
    return {
        type: 'INCREMENT_COUNT'
    }
}


export const decrementCount = () => {
    return {
        type: 'DECREMENT_COUNT'
    }
}