import './App.css'
import {List} from "./components/List.jsx";
import {useState} from "react";
import {Header} from "./components/Header.jsx";

const initState = [
    { id: 1, text: "Finish the report", completed: false },
    { id: 2, text: "Call the client", completed: true },
    { id: 3, text: "Prepare presentation", completed: false }
];

function App() {

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
      <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <List handleToggle={handleToggle} handleDelete={handleDelete} todos={todos} />
          </div>
      </div>

  )
}

export default App
