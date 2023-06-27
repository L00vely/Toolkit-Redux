import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"


export const TodoApp = () => {
    
    const [ todoId, setTodoId ] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    
    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const previousTodo = () => {
        setTodoId( todoId - 1 );
    }

    return (
        <>
        
            <h1>Todos -RTK Query</h1>
            <hr />
            <h4>isLoadding: { isLoading ? 'True':'False' }</h4>
            <pre>{ JSON.stringify(todo) }</pre>
            {/* <ul>
                { todos.map( todo => (
                    <li key={ todo.userId }>
                        <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong> {todo.title}
                    </li>
                )) }
            </ul> */}
            <button onClick={previousTodo}>
                Previous Todo
            </button>
            <button onClick={nextTodo}>
                Next Todo
            </button>
        </>
        
    )
}
