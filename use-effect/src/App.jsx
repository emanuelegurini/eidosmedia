import './App.css'
import {List} from "./components/List.jsx";
import {Header} from "./components/Header.jsx";
import {useEffect, useState} from "react";


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

   }, [count]) // <-- this is the deps array

  return (
          <div className="min-h-screen bg-gray-50">
              <Header />
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                  {
                      count
                  }

                  <button className='border-2 border-amber-950 p-2' onClick={() => setCount(prev => prev + 1)}>update count</button>
                  {
                      todo?.title
                  }
                  <List>
                  </List>
              </div>
          </div>
  )
}

export default App
