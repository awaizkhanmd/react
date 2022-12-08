//import logo from './logo.svg';
import { useState } from 'react'
import "./App.css";
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import About from "./components/About";
function App() {
  const [mode, setMode] = useState('light');
  const [Red, setRed] = useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null);
  }, 1500);
  }

  const toggleMode = function() {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("dark mode enabled","success")
  }
else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("light mode enabled","success")
  }
  }
  const clicked=function(){
    if(mode === 'light'){
      setMode('dark')
    }
  }

  const Switch = function(){
    if(mode === 'light'){
      setMode('#dc3545')
      document.body.style.backgroundColor='#042743'
      showAlert("dark mode enabled","success")
  }
  else
  {
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("light mode enabled","success")
  }
  }
  return (
    <>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} Switch={Switch}  clicked={clicked}/>
      <Alert  alert={alert}/>
      <div className="container  my-3">
        <TextForm showAlert={showAlert}  heading="enter the text"  mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
