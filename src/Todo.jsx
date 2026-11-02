import { useEffect, useState } from "react"

function Todo() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(("todos"))) || [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function handleSubmit() {
        let todo = {
            id: input,
            name: input
        }
        setTodos([ ... todos, todo])
    }

    function handleDelete(id) {
        setTodos([ ... todos.filter((todo) => todo.id != id)])
    }

    return (
        <>
            <h1>Page Todo</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => handleSubmit()}>Soumettre</button>

            {todos.map((todo) => (
                <div key={todo.id}>
                    <p>{todo.name}</p>
                    <button onClick={() => handleDelete(todo.id)}>X</button>
                </div>
            ))}
        </>
    )
}

export default Todo