
import {useState, useEffect} from 'react'
import "./Flake.css"

const Flake=({left})=>{

    let [top, setTop] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            console.log("MOVE!")
            setTop(top+5)}, 1000)
        })
  
    
    
    const style ={
        top:`${top}%`,
        left:`${left}%`
    }
 const jsx = (
        <>
        <div className="flake"
        style={style}
        >
        </div>
      </>
    )
    console.log("component")
    return jsx
}
export  {Flake}