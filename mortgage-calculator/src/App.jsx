import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './components/Button';

import { initForm } from './constants/formConstant';
import { createForm } from './utils/formUtils';

const App = () => {

  const [formStruct, setFormStruct] = useState(initForm)
  const [selectedInput, setSelectedInput] = useState('')
  const [showElement, setShowElement] = useState(false)

  const handleChange = (e) => {
    setFormStruct(prev => ({...prev, [e.target.name] : { ...prev[e.target.name], value: e.target.value }}))
  }

  const handleAddInput = () => {
    const inputKeys = Object.keys(formStruct).filter((key) =>
      key.startsWith("input")
    );
    const nextInputNumber = inputKeys.length + 1;
    const newInputKey = `input${nextInputNumber}`;
    setFormStruct((prev) => ({
      ...prev,
      [newInputKey]: {
        type: selectedInput,
        name: newInputKey,
        required: true,
        placeholder: `Type here`,
        value: "",
        id: newInputKey,
        classNames: "border-2 border-black",
      },
    }));
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md flex flex-col space-y-4">
        {createForm(formStruct, handleChange).map((el) => el)}

        <label
          htmlFor="pet-select"
          className="text-sm font-medium text-gray-700"
        >
          Choose the input type:
        </label>
        <select
          onChange={(e) => setSelectedInput(e.target.value)}
          name="input"
          id="input-select"
          className="border-2 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">--Please choose an option--</option>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
        </select>

        <Button
          disabled={!selectedInput}
          text="Add"
          color="pink"
          pateta={handleAddInput}
        />

        {showElement && <p>Hello, Pateta</p>}
        {showElement &&
          createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-grey bg-opacity-50 backdrop-blur-sm" />
              {/* Dialog Container */}
              <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 transform transition-all">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Dialog Title
                  </h2>
                  <button onClick={() => setShowElement((prev) => !prev)}>
                    Don't show
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )}

        <button onClick={() => setShowElement((prev) => !prev)}>show</button>
      </div>
    </div>
  );
}

export default App


