import { useEffect, useState } from 'react';
import './App.css';
import validator from 'validator';

function App() {
  const [value,setvalue] = useState(true)
  const [value2,setvalue2] = useState(false)
  const [error,seterror] = useState('')

  const show = () => {
    setvalue((prev) => !prev)
  }

  const check = (pass) => {
    if(validator.isStrongPassword(pass,{
      minLength:8,minLowercase:5,minNumbers:1,minSymbols:1,minUppercase:1
    })){
      seterror('strong password')
      setvalue2(true)
    } else {
      seterror('weak password')
      setvalue2(true)
    }
  }

  useEffect(() => {
    let time
    if(value2){
      time = setTimeout(() => setvalue2(false),2000)
    }

    return () => clearTimeout(time)
  },[value2])



  return (
    <div className="App">
      <h1>type password</h1>
      { value2  && <p>{error}</p>}
      <input type={value ? 'password' : 'text'} placeholder='password' onChange={(e) => check(e.target.value)}/>
      <button>submit</button>
      <button onClick={show}>show password</button>
    </div>
  );
}

export default App;
