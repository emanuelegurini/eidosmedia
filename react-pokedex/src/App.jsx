import { useState } from 'react'
import { Button } from './components/Button'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="flex gap-2">
      <Button
        text="minus"
        color="pink"
        pateta={() => setCount((prev) => prev - 1)}
      />
      <div>{count}</div>
      <Button
        text="add"
        color="green"
        pateta={() => setCount((prev) => prev + 1)}
      />
    </div>
  );
}

export default App


