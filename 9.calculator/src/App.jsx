import './App.css'
import { useState } from 'react'

function App() {
 
  const[inputValue, setInputValue] = useState("");


  
  const dispalay = (value)=>{
     setInputValue(inputValue+value)
  }

  const calculate =()=>{
    let ans = eval(inputValue);
    setInputValue(ans)
  }
                  // to clear the calue in input
  const clear = ()=>{
    setInputValue("");
  }
  return (
     <div className='calc'>

      <input 
      type='text'
      value={inputValue}
      />

     <div className='sec-1'>
       <button onClick={clear} style={{width:'100px'}}>AC</button>
       <button onClick={()=> dispalay(".")}>.</button>
       <button onClick={()=> dispalay("/")}>/</button>
     </div>
     <div className='sec-1'>
       <button onClick={()=> dispalay("1")}>1</button>
       <button onClick={()=> dispalay("2")}>2</button>
       <button onClick={()=> dispalay("3")}>3</button>
       <button onClick={()=> dispalay("*")}>*</button>
     </div>
     <div className='sec-1'>
      <button onClick={()=> dispalay("4")}>4</button>
      <button onClick={()=> dispalay("5")}>5</button>
      <button onClick={()=> dispalay("6")}>6</button>
      <button onClick={()=> dispalay("+")}>+</button>
     </div>
     <div className='sec-1'>
     <button onClick={()=> dispalay("7")}>7</button>
     <button onClick={()=> dispalay("8")}>8</button>
     <button onClick={()=> dispalay("9")}>9</button>
     <button onClick={()=> dispalay("-")}>-</button>
     </div>
     <div className='sec-1'>
     <button onClick={()=> dispalay("0")} style={{width:'100px'}}>0</button>
     <button onClick={calculate} style={{width:'100px'}}>=</button>
     </div>

     
     </div>
  )
}

export default App
