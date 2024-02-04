import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { useState } from 'react';

function App() {
  const [mode , setMode] = useState('light');
  const toggelmode = ()=>{
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
  }
  return (
    <>
      <Navbar mode= {mode} toggelmode = {toggelmode}/>
      <Home/>
    </>

  );
}

export default App;
