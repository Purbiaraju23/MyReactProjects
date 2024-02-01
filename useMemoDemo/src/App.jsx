import React, { useMemo, useState } from 'react'

function App() {

  const[number,setNumber] = useState(0)
  const[dark,setDark]= useState(false)
  const doubleNumber = useMemo(()=>{
    return slowfunction(number)
  }, [number])  // if my number remain same then useMemo hook will memoize the stored value and do not return slowfunction
  // const doubleNumber = slowfunction(number)

  const themeStyle= {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <>
    <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
    <button onClick={()=> setDark(prevDark=>!prevDark)}>Change Theme</button>
    <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}

const slowfunction = (num)=>{
  console.log('calling slow function ')
  for(let i=0; i<10000000;i++)
  {}
  return num * 2
}

export default App