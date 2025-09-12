import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './components/Button';

import { initForm } from './constants/formConstant';
import { createForm } from './utils/formUtils';

const App = () => {
  const [formStruct, setFormStruct] = useState(initForm);
  const [selectedInput, setSelectedInput] = useState('');
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleChange = (e) => {
    setFormStruct((prev) => ({
      ...prev,
      [e.target.name]: { ...prev[e.target.name], value: e.target.value },
    }));
  };

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
  };

  const handleOpenDialog = (e) => setItemToDelete(e.target.id);
  const handleCloseDialog = () => setItemToDelete(null);

  const handleConfirmDelete = () => {
    if (!itemToDelete) return;
    setFormStruct((prev) => {
      const { [itemToDelete]: _, ...rest } = prev; 
      return rest;
    });
    handleCloseDialog();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md flex flex-col space-y-4">
        {createForm(formStruct, handleChange, handleOpenDialog).map((el) => el)}

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

        {!!itemToDelete && 
          createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-blur-sm"
                onClick={handleCloseDialog} 
              />
              <div className="relative bg-white rounded-lg shadow-xl max-w-sm w-full mx-4 p-6 transform transition-all text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Hey!
                </h2>
                <p className="text-gray-600 mb-6">
                  Are you sure that you want to delete the item{" "}
                  <strong>{itemToDelete}</strong>?
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    text="Cancel"
                    color="gray"
                    pateta={handleCloseDialog}
                  />
                  <Button
                    text="Delete"
                    color="red"
                    pateta={handleConfirmDelete}
                  />
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
};

export default App;