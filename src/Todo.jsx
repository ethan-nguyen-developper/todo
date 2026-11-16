import { useState } from "react"

function Todo() {
    const [input, setInput] = useState("")

    return (
        <>
            <h1>Page Todo</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Soumettre</button>
            <p>{input}</p>
        </>
    )
}

export default Todo