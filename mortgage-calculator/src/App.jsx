import { useState } from 'react'
import { Result } from './components/Result';
import { Button } from './components/Button';
import { List } from './components/List';

const App = () => {
  const [list, setList] = useState(['buy coffe', 'make pasta'])
  const [toDo, setTodo] = useState('') 

  const addToDo = () => {
     setList((prev) => [...prev, toDo]);
  }

  const handleInput = (e) => {
    setTodo(e.target.value);
  }

  return (
    <>
      <div>
        <List list={list} />

        <input 
          onChange={handleInput}
          type='text'  
          className='border-black border-2'
        />

        <Button color={'pink'} text={'Add todos'} pateta={addToDo} /> 
        
        <div className={"flex gap-2"}>
        </div>
      </div>
    </>
  );
}

export default App


