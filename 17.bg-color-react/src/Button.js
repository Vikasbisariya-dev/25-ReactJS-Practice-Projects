import { useState } from "react";
import "./App.css"


 

const Button = (prop)=> {
    return(
        
        <button onClick={prop.onClick} style={{backgroundColor:prop.col}} >{prop.name}</button>
        
    );
}

const Allbtn = ()=>{
    // const colors = ["red","black","yellow","green","pink","blue","brown","grey","purple"]
    const [color, setColor] = useState("olive")
     const  handleClick = (newColor)=> {
            setColor(newColor);
        }

    
    return(
          <div className="cotainer" style={{backgroundColor : color}}>
        <Button  onClick={() => handleClick("red")}   col={"red"} name={"red"} />
        <Button onClick={() => handleClick("black")} col={"black"} name={"black"} />
        <Button onClick={() => handleClick("yellow")} col={"yellow"} name={"yellow"} />
        <Button onClick={() => handleClick("green")} col={"green"} name={"green"} />
        <Button onClick={() => handleClick("pink")} col={"pink"} name={"pink"} />
        <Button onClick={() => handleClick("blue")} col={"blue"} name={"blue"} />
        <Button onClick={() => handleClick("brown")} col={"brown"} name={"brown"} />
        <Button onClick={() => handleClick("grey")} col={"grey"} name={"grey"} />
        <Button onClick={() => handleClick("purple")} col={"purple"} name={"purple"} />
        </div>
    )
}
     

export default Allbtn;