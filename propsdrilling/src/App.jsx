import './App.css'
import { useState} from "react";
import {List} from "./components/List.jsx";
import {Header} from "./components/Header.jsx";

const initState = [
  { id: 1, text: "Apples", completed: false },
  { id: 2, text: "Bread", completed: true },
  { id: 3, text: "Milk", completed: false }
];

const shoes = [
    '/shoes/image-product-1-thumbnail.jpg',
    '/shoes/image-product-2-thumbnail.jpg',
    '/shoes/image-product-3-thumbnail.jpg',
    '/shoes/image-product-4-thumbnail.jpg'
]

function App() {

  const [todos, setTodos] = useState(initState);

  const [selectedImage, setSelectedImage] = useState("/shoes/image-product-1-thumbnail.jpg");

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
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Shopping List
        </h1>

          <img className={'w-full h-full'} src={selectedImage}/>

          {
             shoes.map((shoe) => (
                 <img src={shoe} onClick={ (e) => setSelectedImage(e.target.src)} className={'w-12 h-12'}/>
             ))
          }

{/*        <List
            items={todos}
            onToggle={handleToggle}
            onDelete={handleDelete}
        />*/}
      </div>
      </div>
  )
}

export default App
