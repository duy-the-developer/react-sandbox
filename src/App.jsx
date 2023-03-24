import './App.css'
import Example1 from './examples/example-1'
import Example2 from './examples/example-2'
import Example3 from './examples/example-3'

const App = () => {
    console.count('App Rendered')

    return (
        <>
            {/* How React Re-renders */}
            {/* <Example1 /> */}

            {/* useState Is Slow */}
            {/* <Example2 /> */}

            {/* Derived States*/}
            <Example3 />
        </>
    )
}

export default App
