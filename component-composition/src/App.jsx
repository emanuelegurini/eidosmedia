import './App.css'
import {TodoProvider, TodoContext} from "./providers/TodoProvider.jsx";
import {List} from "./components/List.jsx";
import {Header} from "./components/Header.jsx";
import {ItemList} from "./components/ItemList.jsx";
import {useContext} from "react";

function App() {
  const {todos, handleToggle, handleDelete } = useContext(TodoContext);

  return (
          <div className="min-h-screen bg-gray-50">
              <Header />
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                  <List>
                      {todos?.map(item => (
                          <ItemList
                              key={item.id}
                              item={item}
                              handleToggle={handleToggle}
                              handleDelete={handleDelete}
                          />
                      ))}
                  </List>
              </div>
          </div>
  )
}

export default App
