import './App.css'
import Login from './components/Login'
import Message from './components/Message'
import UserContextPRovider from './context/UserContextPRovider'

function App() {
 
  return (
    <UserContextPRovider>
      <Login/>
      
      <Message/>
    </UserContextPRovider>
  )
}

export default App
