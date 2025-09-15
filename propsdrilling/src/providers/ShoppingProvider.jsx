import {createContext, useState} from "react";

const initState = [
    { id: 1, text: "Apples", completed: false },
    { id: 2, text: "Bread", completed: true },
    { id: 3, text: "Milk", completed: false }
];

export const ShoppingContext = createContext({});

export const ShoppingProvider = ({children}) => {

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
        <ShoppingContext value={{todos, setTodos, handleToggle, handleDelete}}>
            {children}
        </ShoppingContext>
    )

}