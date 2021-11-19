import React from 'react';
import { useState, useEffect } from "react";
import './Groovebox.css';

// Child
// Parent : Groovebox
function Switch(props) {

// -----   HOOKS   -----

const [clicked, setClicked] = useState(false);
const [backgroundColor, setBackgroundColor] = useState("var(--color2)");

// background color
useEffect(() => {
if(props.isOn) {
    if(props.step == props.beat && clicked) {
        setBackgroundColor('var(--color3)');
      /*  var audio = new Audio(props.src);
        let instrument = props.id;
        audio.volume = props.volume[instrument];
        audio.play();*/
    } else if(props.step != props.beat && clicked) {
        setBackgroundColor('var(--color4)')
    } else if(props.step == props.beat && !clicked) {
        setBackgroundColor("var(--color5)")
    } else {setBackgroundColor('var(--color2)') }
} else if(!props.isOn) {
    if(clicked) {setBackgroundColor('var(--color4)')
    } else {setBackgroundColor('var(--color2)')}
}
}, [props.beat, clicked, props.isOn]);


//   -----   METHODS   -----


const handleStyle = () => {
    if(clicked) {
        setClicked(false);

    } else {
        setClicked(true);
    }
}


//   -----   RETURN   -----

  return (

// We just create 1 model of switch and define its properties, we create the grid and pass value through parent
<div style={{backgroundColor: backgroundColor}} className="switch" id={props.id} step={props.step} onClick={(e) => {
    handleStyle(); 
    props.handleSequence(e, props.step);
    }}>
    {props.step+1}
    <audio src={props.src} className="clip" id={props.letter}></audio>
</div>
) // return
} // Switch

export default Switch;