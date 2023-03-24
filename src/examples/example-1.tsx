import React, { useState } from 'react'
import Icon from './icon'

const CountDisplay = ({ count }: { count: number }) => {
    console.count('CountDisplay rendered')
    return <span>{count}</span>
}

// Counter component
const Counter = () => {
    const [count, setCount] = useState(0)
    console.count('Counter rendered')

    return (
        <div className="flex items-center justify-center gap-4">
            <button onClick={() => setCount(count + 1)}>+ 1</button>
            <CountDisplay count={count} />
            <Icon />
        </div>
    )
}

const Example1 = () => {
    const [showCounter, setShowCounter] = useState(false)
    console.count('Example1 rendered')

    const handleClick = () => setShowCounter(!showCounter)

    return (
        <>
            <div className="flex flex-col gap-4">
                <h1>Example 1: How React Re-renders</h1>
                <button onClick={handleClick}>Show counter</button>
                {showCounter && <Counter />}
            </div>
        </>
    )
}

export default Example1
