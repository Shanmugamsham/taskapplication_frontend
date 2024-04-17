
import './App.css'
import Nav from './components/Nav'
import UsercontextProvider from './context/UsercontextProvider'


function App() {
  

  return (
    <UsercontextProvider>

       <Nav/>
  
    </UsercontextProvider>
  
  )
}

export default App
