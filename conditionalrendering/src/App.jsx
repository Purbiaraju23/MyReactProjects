import { useState } from 'react';
import Div1 from './components/Div1'
import Div2 from './components/Div2'

function App() {
  const isLoggedIn = true;
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);
    
      if (clickCount === 1) {
        alert("You single clicked")
      }
}
const handleDoubleClick = () => {
  alert("you double clicked")
  setClickCount(0)
}
  return (
    <>
      <div>
        {isLoggedIn ? (
          <Div1 color="yellow" bgcolor="white" onclick={handleClick} ondblclick={handleDoubleClick}/>
        ) : (
          <Div2 />
        )}
      </div>
    </>
  )
}

export default App

