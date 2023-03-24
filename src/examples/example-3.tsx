import React from 'react'

const teams = [
    { id: 1, name: 'Team 1', score: 0 },
    { id: 2, name: 'Team 2', score: 0 },
    { id: 3, name: 'Team 3', score: 0 },
]

const Example3 = () => {
    return (
        <div>
            <h1>Example 3: Derived state</h1>
            <ul>
                {teams.map((team) => (
                    <li key={team.id} className="flex gap-4">
                        <p>{team.name}</p>
                        <p>{team.score}</p>
                        <button>+ 1 point</button>
                        <button>select</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Example3
