
import './App.css'
import { Accordions } from './Accordions'
function App() {
  
  const AccordionsData = [
    {
      question:"What is JavaScript",
      answer: "JavaScript (JS) is a high-level programming language commonly used for web development. It enables interactive and dynamic content on websites, enhancing user experience. As a client-side scripting language, JS runs in web browsers and is essential for creating modern, responsive web applications."
    },
    {
        question:"what is Reactjs",
        answer:"React.js is an open-source JavaScript library for building user interfaces. Developed by Facebook, it follows a component-based architecture, making it efficient for creating dynamic and responsive web applications."
    },
    {
        question:"what is NodeJs",
        answer:"Node.js is a server-side JavaScript runtime built on the V8 engine. It enables scalable and high-performance network applications, fostering the use of JavaScript for server-side development."
    },
    {
        question:"What is ExpressJs",
        answer:"Express.js is a minimal and flexible Node.js web application framework, widely used for building efficient and scalable web and mobile applications. It simplifies HTTP request handling and middleware integration, making it popular for creating RESTful APIs."
    }
]


  return (
    <div className='main'>
    {AccordionsData.map(({question, answer, index})=>{
      return <Accordions key={index} question={question} answer={answer} />;
    })}
    </div>
  )
}

export default App
