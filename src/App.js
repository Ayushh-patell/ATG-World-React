import { useState } from 'react';
import './App.css';
import LandingImg from './Components/LandingImg';
import Maincontent from './Components/Maincontent';
import LoginModal from './Components/Modals/LoginModal';
import SignupModal from './Components/Modals/SignupModal';
import Navbar from './Components/Navbar';



function App() {
  const [loggedIn, setloggedIn] = useState(false)
  return (
    <div className="App">
      <Navbar/>
      <LandingImg/>
      <Maincontent loggedIn={loggedIn}/>


      <LoginModal loggedIn={loggedIn} setloggedIn={setloggedIn}/>
      <SignupModal loggedIn={loggedIn} setloggedIn={setloggedIn}/>
    </div>
  );
}

export default App;
