import { useEffect, useState } from 'react'
import { auth } from './Firebase/firebase'
import LoginForm from './components/Login/login'
import SignupForm from './components/Signup/signup'
import { onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
      <div>
        <h1>React Firebase Auth</h1>
        {user ? (
          <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
          <SignupForm/>
          <hr/>
          <LoginForm/>
          </>
        )}
      </div>
  )
}

export default App