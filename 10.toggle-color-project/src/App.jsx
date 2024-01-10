import './App.css'
import { useState } from 'react'

function App() {

  const [bgcolor, setBgcolor] = useState("#1b1b1b");
  const [textcol, setTextcol] = useState("#ffa900")
  const [text, setText] = useState("Black theme")
  

  const handleClick = ()=>{
    setBgcolor( bgcolor === 'white' ? "#1b1b1b" : 'white')
    setText(text === 'White theme' ? "Black theme" : "White theme")
    setTextcol(textcol === '#1b1b1b' ? '#ffa900' : "#1b1b1b")
  }

  const buttonStyle = {
     color:textcol,
     border: '1px solid {textcol}',
     backgroundColor: bgcolor,
  }

  return (
    <div  style={{backgroundColor:bgcolor}}>
      <button onClick={handleClick} style={buttonStyle}>{text}</button>
      <h1 style={{color:textcol}}>WELCOME TO TOGGLE THEME</h1>
    </div>
  )
}

export default App
