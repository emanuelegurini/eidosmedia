import { useState } from 'react'

const initForm = {
  input1 : { 
    type: "text",
    name: "input1",
    required: true,
    placeholder: "Type here", 
    value: "",
    id: 'input1',
    classNames: 'border-2 border-black'
  },
  input2 : { 
    type: "text",
    name: "input2",
    required: true,
    placeholder: "Type here", 
    value: "",
    id: 'input2',
    classNames: 'border-2 border-black'
  },
} 

const createForm = (list, handleChange) => {
  let form = [];

  for (const [, value] of Object.entries(list)) {
    form = [
      ...form,
      <input
        type={value.type}
        name={value.name}
        placeholder={value.placeholder}
        value={value.value}
        id={value.id}
        key={value.id}
        className={value.classNames}
        onChange={handleChange}
      />,
    ];
  }

  return form;
};

const App = () => {

  const [formStruct, setFormStruct] = useState(initForm)

  const handleChange = (e) => {
    setFormStruct(prev => ({...prev, [e.target.name] : { ...prev[e.target.name], value: e.target.value }}))
  }

  return (
    <>
      {createForm(formStruct, handleChange).map((el) => {
        return el;
      })}
      <button
        onClick={() => {
          setFormStruct((prev) => ({
            ...prev,
            ["input" + (Object.entries(prev).length + 1)]: {
              type: "text",
              name: "input" + (Object.entries(prev).length + 1),
              required: true,
              placeholder: "Type here",
              value: "",
              id: "input" + (Object.entries(prev).length + 1),
              classNames: "border-2 border-black",
            },
          }));
        }}
      >
        Add
      </button>
    </>
  );
}

export default App


