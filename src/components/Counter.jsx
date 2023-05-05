import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {

    const count = useSelector(state => state.counter.count)

    return (
        <div className='flex gap-2 items-center'>
            <div>Counter</div>
            <p className='border-[1px] px-2 py-1  border-red-600'>{count}</p>
        </div>
    )
}

export default Counter