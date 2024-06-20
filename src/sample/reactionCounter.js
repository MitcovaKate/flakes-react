import { useState } from "react";

const reactionCounter = () => {
    let [reactions , setReactions] = useState([100 , 10 , 0 ]);
    return (
         <div>
        <span><img src="https://icons.iconarchive.com/icons/seanau/flat-smiley/48/Smiley-11-icon.png"/>{reactions[0]}</span>
        <span><img src="https://icons.iconarchive.com/icons/seanau/flat-smiley/48/Smiley-18-icon.png"/>{reactions[1]}</span>
        <span onClick={()=>{
            reactions[2]++ 
            setReactions([...reactions])}}><img src="https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/48/Hand-thumbs-up-like-2-icon.png"/>{reactions[2]}
        </span>
        </div>
    )
}
export default reactionCounter