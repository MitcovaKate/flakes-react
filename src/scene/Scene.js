
import './Scene.css';
import {Flake} from './flake/Flake'
import {randomCoordinate} from '../utils/coords'
import { randomDelay } from '../utils/time';
import { randomSize } from '../utils/size';
import { useState , useEffect } from 'react';
const maxFlakes = 100;
const delay = 20;

const startTop = -15;
const overallSpeed = 0.5;
function Scene() {

    // for (let i = 0; i < maxFlakes; i++) {
   
  let [flakeData , setFlakeData]=useState([
    {top:startTop, left:randomCoordinate(),initialDelay:randomDelay(),size:randomSize()}
  ])
// }
;

  useEffect(()=>{
    setTimeout(()=>{
     setFlakeData(flakeData.map(flake=>{
     flake.top+= overallSpeed * flake.size
      return flake
     })
    .filter(flake=>flake.top < 100)
    )
  }, delay)})
  return (
    <div className="scene">

      {flakeData.map(flake =><Flake {...flake}/> ) }
    </div>
  );
}

export default Scene;
