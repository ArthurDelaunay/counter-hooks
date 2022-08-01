import Counter from "./components/Counter"
import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)
    const onPlusClick = () => {
        setCount(count + 1)
    }
    const onMinusClick = () => {
        setCount(count - 1)
    }

    return (
        <main>
            <Counter
                count={count}
                onPlusClick={onPlusClick}
                onMinusClick={onMinusClick}
            />
        </main>
    )
}

export default App
