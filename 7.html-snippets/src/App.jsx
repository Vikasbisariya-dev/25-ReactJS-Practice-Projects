// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Tolltip } from './Tolltip'
import { Download } from './Download'
import { Contenteditable } from './Contenteditable'
import { Marquee } from './Marquee'
function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div>
       <Tolltip /><hr />
        <Download /><hr />
        <Contenteditable />
        <Marquee />
     </div>
  )
}

export default App
