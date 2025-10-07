import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './components/Login/login'
import SignupForm from './components/Signup/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center">
      <div>
        <LoginForm />
      </div>
    </div>
    </>
  )
}

export default App
