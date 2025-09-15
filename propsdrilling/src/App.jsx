import './App.css'

import {List} from "./components/List.jsx";
import {Header} from "./components/Header.jsx";
import {ShoppingProvider} from "./providers/ShoppingProvider.jsx";

function App() {

  return (
      <ShoppingProvider>
          <div className="min-h-screen bg-gray-50">
              <Header>
                  <div className="flex items-center gap-2">hello world</div>
              </Header>
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                  <h1 className="text-2xl font-bold text-gray-800 mb-6">
                      Shopping List
                  </h1>
                  <List />
              </div>
          </div>
      </ShoppingProvider>


  )
}

export default App
