import {createContext, useState} from "react";

export const TodoContext = createContext({});

const initState = [
    { id: 1, text: "Finish the report", completed: false },
    { id: 2, text: "Call the client", completed: true },
    { id: 3, text: "Prepare presentation", completed: false }
];

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState(initState);

    const handleToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
            <TodoContext.Provider value={{todos, handleToggle, handleDelete}}>
                {children}
            </TodoContext.Provider>
    )
}


