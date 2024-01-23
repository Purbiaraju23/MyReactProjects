import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'


function App() {
  const [count, setCount] = useState(0)

  let myobj ={
    username: 'Raju Purbia',
    age : 21
  }

  let newobj = {
    username: 'Hardik ',
    age: 22
  }

  // let myArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test </h1>
      
      <Card someObj={myobj} btnText="Click Me"/> 
      
      <Card someObj={newobj} />
    </>
  )
}

export default App
