import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAlowed] = useState(false)
  const [charAllowed, setCharAlowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWKYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+={}~`"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log(char)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  },[numberAllowed,charAllowed,length,setPassword])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  } , [password]) 

  useEffect(()=>{
    passwordGenerator()
  } , [length,numberAllowed,charAllowed, passwordGenerator])
//this will allow us to perform side effects in our component 
//this code will actually run and update UI

  return (
    <>
      

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-4xl text-white text-center mb-5'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value = {length}
        onChange={(e)=>{
          setLength(e.target.value)
        }}
        />
        <label >Length: {length}</label>

      </div>

      <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id = 'numberinput'
          onChange={() => {
            setNumberAlowed((prev) => !prev)
          }}
           />
           <label htmlFor='numberinput'>Numbers</label>

        </div>
        <div className='flex items-center gap-x-1'>

          <input type="checkbox" 
          defaultChecked = {charAllowed}
          id = "characterinput"
          onChange={()=>{
            setCharAlowed((prev)=>!prev)
          }}
          />
          <label htmlFor="characterinput">Character</label>

        </div>
      </div>
      </div>
    </>
  )
}

export default App
