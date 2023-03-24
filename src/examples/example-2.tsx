import React, { useState, useEffect } from 'react'
import Icon from './icon'

const Example2 = () => {
    const [count, setCount] = useState(0)

    const plusFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1)
        }
    }

    return (
        <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col gap-4">
                <button onClick={() => setCount(count + 1)}>+ 1</button>
                <button onClick={plusFive}>+ 5</button>
            </div>
            <span>{count}</span>
            <Icon />
        </div>
    )
}

export default Example2
