import './App.css'
import bimg from "./images/tailwind-img.jpeg"
function App() {
 

  return (        // responsive
     <div className='h-screen w-screen  
      lg:flex
     '>
     <div className='h-1/4 w-full 
     '>
      <p className='mx-5 text-xl 
       lg:text-4xl lg:pt-5 lg:mt-32
      '>Books are windows to worlds we have never known, <span className='text-red-500 font-bold'>unlocking the doors of wisdom and imagination</span> with each turn of a page.</p>
      <button className='bg-black rounded-sm mx-6 hover:bg-red-400 px-3 py-2 font-bold text-white text-sm mt-1 
       lg:text-2xl lg:mt-52
      '>more quote</button>
     </div>

     <div className='h-3/4 w-full  lg:h-lvh'>
     <img src={bimg}  className='h-full w-auto
     '/>
     </div>
     
     </div>
  )
}

export default App



// <div className=' h-screen w-screen flex m-0 font-san-sarif'>    Not responsive

//     <div className='w-6/12 h-full text-4xl'>
//      <p className='text-left my-60 mx-10 font-bold'>Books are windows to worlds we have never known, <span className='text-red-500 font-bold'>unlocking the doors of wisdom and imagination</span> with each turn of a page.</p>
//       <button className='bg-black rounded-sm mx-10 hover:bg-red-400 px-4 py-2 font-bold text-white text-2xl'>more quote</button>
//     </div>

//     <div className='w-6/12 h-full '>
//     <img src={bimg}  className='h-lvh'/>
//     </div>

//   </div>