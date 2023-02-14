import "./styles.css";
import React,{useState, useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

// import ProgressBar from "./component/ProgressBar";

export default function App() {

  const [process, setProcess] = useState(10)
  const [active, setActive] = useState(false)

  const handleClick=()=>{
    if (process===0) {
      setActive(true)
      setProcess(process+1)
    }
    else if(process ===100)
    {
      setActive(false)
      //setProcess(100)
    }
  }

  useEffect(()=>{
      let intervale=setInterval(() => { 
        
          setProcess((prevProgress)=>(prevProgress >= 100 ? 0 : prevProgress + 10))
        
        
      },1000);
      return()=>{
        clearInterval(intervale)
      }
  },[process, active])
  
  return (
    <div className="App">
      <ProgressBar now={process} style={{backgroundColor:"blue", color:"wheat"}} label={`${process}%`}/>      
      {/* <ProgressBar  value={process} /> */}
      {/* <button onClick={handleClick} >ProceessStart</button> */}
    </div>
  );
}
