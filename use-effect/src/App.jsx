import './App.css'
import {List} from "./components/List.jsx";
import {Header} from "./components/Header.jsx";
function App() {

  return (
          <div className="min-h-screen bg-gray-50">
              <Header />
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                  <List>
                  </List>
              </div>
          </div>
  )
}

export default App
