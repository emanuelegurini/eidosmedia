import './App.css'
import {List} from "./components/List.jsx";
import {Header} from "./components/Header.jsx";
import {useEffect, useState} from "react";
import {ProductList} from "./components/ProductList.jsx";


function App() {

    const [count, setCount] = useState(1);
    const [todo, setTodo] = useState(null);


    /*
    * All the instructions inside the useEffect, will be executed:
    *   1. if the deps array is empty --> after the first render
    *   2. if the deps array contains values --> after the first render, and everytime the tracked value change
    *   3. if there is not the deps array --> after every render.
    */
   useEffect(() => {

       fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
           .then(res => res.json())
           .then(data => setTodo(data))

   }, [count]) // <-- this is the deps array (optional)

  return (
          <div className="min-h-screen bg-gray-50">
              <Header />
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">

                  <ProductList />

              </div>
          </div>
  )
}

export default App
