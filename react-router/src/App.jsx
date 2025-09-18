import './App.css'
import {ProductList} from "./components/ProductList.jsx";

function App() {

  return (
          <div className="min-h-screen bg-gray-50">
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">

                  <ProductList />

              </div>
          </div>
  )
}

export default App
