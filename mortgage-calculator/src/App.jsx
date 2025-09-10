import { useState } from 'react'
import { Button } from './components/Button';
import { List } from './components/List';

const App = () => {
  const [mortgage, setMortgage] = useState({
      amount: 0, 
      term: 0, 
      rate: '',
    })

    const updateMortgage = (e) => {
      const inputName = e.target.name;
      setMortgage((prev) => ({ ...prev, [inputName]: e.target.value }));
    }

  return (
    <>
      <div>

        {mortgage.amount}
        {mortgage.term}
        {mortgage.rate}

        <input 
          onChange={updateMortgage}
          name='amount'
          type='number'  
          className='border-black border-2'
        />

        <input 
          onChange={updateMortgage}
          name='term'
          type='number'  
          className='border-black border-2'
        />

        <input 
          onChange={updateMortgage}
          name='rate'
          type='text'  
          className='border-black border-2'
        />

        <Button color={'pink'} text={'Add todos'} pateta={() => console.log('hello')} /> 
        
        <div className={"flex gap-2"}>
        </div>
      </div>
    </>
  );
}

export default App


