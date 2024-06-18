
import {useState, useEffect} from 'react'
import "./Flake.css"

const Flake=({left, initialDelay, size})=>{
     const delay = 30
     const speed = size
     const startTop = -15
     let [top, setTop] = useState(startTop)
    useEffect(()=>{
        setTimeout(()=>{
            setTop(
                top < 100 ? top + speed : startTop) }, top == startTop ? initialDelay : delay)
        })
  
    
const style ={
        top:`${top}%`,
        left:`${left}%`,
        transform:`scale(${size})`
    }
const jsx = (
        <>
        <div className="flake"
        style={style}
        >
        </div>
      </>
    )
    return jsx
}
export  {Flake}