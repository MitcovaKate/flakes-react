import "./Flake.css";
import { randomCoordinate } from "../utils/coords"
const Flake=()=>{

    let top=0
    const style ={
        top:`${top}%`,
        left:`${randomCoordinate()}%`
    }
    return(
        <>
        <div className="flake"
        style={style}
        >

        </div>
        <button 
        onClick={()=>{
          top++
          console.log(top)
        }}>
         DOWN
        </button>
        </>
    )
}
export  {Flake}