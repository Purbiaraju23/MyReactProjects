import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  const addValue = () => {
    if ( counter < 20 ){
      setCounter(counter + 1)
      // alert(counter)
      setCounter(counter => counter+1)
      
      // setCounter(counter + 3) // only last statement will be executed
      //setCounter(counter + 1)
      //setCounter(counter + 1) // here counter will not be updated because it will add to previous value only.
      
    }
    
  }

  
  // const addValue = () => {
  //   if ( counter < 20 ){
  //     setCounter((prevCounter) => prevCounter + 1) // Here counter updated
  //     setCounter((prevCounter) => prevCounter + 1) // because state is changed.

  //   }
  // }

  const removeValue = () => {
    if ( counter > 0 ){
      setCounter(counter - 1)
    }
    
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value :{counter}</h2>
      <br />
      <button onClick={addValue}>Add Value: {counter} </button>
      <br /><br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <br />
      <p>Value: {counter}</p>
    </>
  )
}

export default App
