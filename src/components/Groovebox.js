import React from 'react';
import { useState, useEffect, useRef, useImperativeHandle } from "react";
import Switch from './Switch';
import './Groovebox.css';
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import * as Tone from 'tone';


// new ins

var tekno01 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno01.mp3").toDestination();
var tekno02 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno02.mp3").toDestination();
var tekno03 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno03.mp3").toDestination();
var tekno04 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno04.mp3").toDestination();
var tekno05 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno05.mp3").toDestination();
var tekno06 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno06.mp3").toDestination();
var tekno07 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno07.mp3").toDestination();
var tekno08 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno08.mp3").toDestination();
var playerstekno = [tekno01, tekno02, tekno03, tekno04, tekno05, tekno06, tekno07, tekno08];

var dub01 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub01.mp3").toDestination();
var dub02 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub02.mp3").toDestination();
var dub03 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub03.mp3").toDestination();
var dub04 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub04.mp3").toDestination();
var dub05 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub05.mp3").toDestination();
var dub06 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub06.mp3").toDestination();
var dub07 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub07.mp3").toDestination();
var dub08 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub08.mp3").toDestination();
var playersdub = [dub01, dub02, dub03, dub04, dub05, dub06, dub07, dub08];

var jungle01 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle01.mp3").toDestination();
var jungle02 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle02.mp3").toDestination();
var jungle03 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle03.mp3").toDestination();
var jungle04 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle04.mp3").toDestination();
var jungle05 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle05.mp3").toDestination();
var jungle06 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle06.mp3").toDestination();
var jungle07 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle07.mp3").toDestination();
var jungle08 = new Tone.Player("https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle08.mp3").toDestination();
var playersjungle = [jungle01, jungle02, jungle03, jungle04, jungle05, jungle06, jungle07, jungle08];

var players = playerstekno;
var beat = 0; // !!! declare before component or it can't be global !

// old ins

const datatekno = [
  { id: 'ins01', letter: 'Q', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno01.mp3' },
  { id: 'ins02', letter: 'W', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno02.mp3' },
  { id: 'ins03', letter: 'E', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno03.mp3' },
  { id: 'ins04', letter: 'A', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno04.mp3' },
  { id: 'ins05', letter: 'S', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno05.mp3' },
  { id: 'ins06', letter: 'D', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno06.mp3' },
  { id: 'ins07', letter: 'Z', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno07.mp3' },
  { id: 'ins08', letter: 'X', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/tekno08.mp3' }];


const datadub = [
  { id: 'ins01', letter: 'Q', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub01.mp3' },
  { id: 'ins02', letter: 'W', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub02.mp3' },
  { id: 'ins03', letter: 'E', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub03.mp3' },
  { id: 'ins04', letter: 'A', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub04.mp3' },
  { id: 'ins05', letter: 'S', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub05.mp3' },
  { id: 'ins06', letter: 'D', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub06.mp3' },
  { id: 'ins07', letter: 'Z', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub07.mp3' },
  { id: 'ins08', letter: 'X', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/dub08.mp3' }];

const datajungle = [
  { id: 'ins01', letter: 'Q', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle01.mp3' },
  { id: 'ins02', letter: 'W', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle02.mp3' },
  { id: 'ins03', letter: 'E', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle03.mp3' },
  { id: 'ins04', letter: 'A', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle04.mp3' },
  { id: 'ins05', letter: 'S', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle05.mp3' },
  { id: 'ins06', letter: 'D', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle06.mp3' },
  { id: 'ins07', letter: 'Z', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle07.mp3' },
  { id: 'ins08', letter: 'X', src: 'https://raw.githubusercontent.com/leo-marie/Sequencer-Portal---frontend/main/public/samples/jungle08.mp3' }];


const moodArray = ["tekno", "dub", "jungle"];

// can remove ?
// create one array for each instrument
let ins01Array = [];
let ins02Array = [];
let ins03Array = [];
let ins04Array = [];
let ins05Array = [];
let ins06Array = [];
let ins07Array = [];
let ins08Array = []; 

// fill arrays so we can map them
const createDataArray = (data) => {
  ins01Array = [];
  ins02Array = [];
  ins03Array = [];
  ins04Array = [];
  ins05Array = [];
  ins06Array = [];
  ins07Array = [];
  ins08Array = []; 

  // fill the insArrays
  for(let i=0; i<16; i++) {
    ins01Array.push({
      id: data[0].id,
      letter: data[0].letter,
      src: data[0].src,
      step: i
    })
    ins02Array.push({
      id: data[1].id,
      letter: data[1].letter,
      src: data[1].src,
      step: i
    })
    ins03Array.push({
      id: data[2].id,
      letter: data[2].letter,
      src: data[2].src,
      step: i
    })
    ins04Array.push({
      id: data[3].id,
      letter: data[3].letter,
      src: data[3].src,
      step: i
    })
    ins05Array.push({
      id: data[4].id,
      letter: data[4].letter,
      src: data[4].src,
      step: i
    })
    ins06Array.push({
      id: data[5].id,
      letter: data[5].letter,
      src: data[5].src,
      step: i
    })
    ins07Array.push({
      id: data[6].id,
      letter: data[6].letter,
      src: data[6].src,
      step: i
    })
    ins08Array.push({
      id: data[7].id,
      letter: data[7].letter,
      src: data[7].src,
      step: i
    })
  }
  return [ins01Array, ins02Array, ins03Array, ins04Array, ins05Array, ins06Array, ins07Array, ins08Array];
}

let PlayStopButton;

const emptySequence = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";

// Parent
// Children : Switch
const Groovebox = React.forwardRef((props, ref) => {

// -----   HOOKS   -----
const [started, setStarted] = useState(false);
const [isOn, setIsOn] = useState(false);
const [currentStep, setCurrentStep] = useState(0);
const [bpm, setBpm] = useState(560);
const [display, setDisplay] = useState("click to start");
const [volume, setVolume] = useState({
  ins01: 1,
  ins02: 1,
  ins03: 1,
  ins04: 1,
  ins05: 1,
  ins06: 1,
  ins07: 1,
  ins08: 1
});
const [mood, setMood] = useState("tekno");
const [dataArray, setDataArray] = useState(createDataArray(datatekno));
const [sequence, setSequence] = useState([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
const [savedSequence, setSavedSequence] = useState("");
 useImperativeHandle(ref, () => ({getSequence: () => {return sequence.toString()}}), [sequence]);
// No array because doesn t rerender + easier to store on blockchain

/*
const [savedSequence, setSavedSequence] = useState({
  tekno: emptySequence,
  dub: emptySequence,
  jungle: emptySequence
});
*/

// new
// -----   THE LOOP   -----

const configLoop = () => {
  const repeat = (time) => {
    console.log(beat)
    sequence.forEach((row) => {
      let pad = row[beat];
      if (pad === 1) {
        players[sequence.indexOf(row)].start(time);
      }
    });
    beat = (beat + 1) % 16;
  };
  Tone.Transport.bpm.value = 120;
  Tone.Transport.scheduleRepeat(repeat, "16n");
};

// -----   USE EFFECT   -----


 // old
 // used for rerendering
// the loop
useEffect(() => {
  const timer = setTimeout(() => {
    if (isOn == true) {
      setCurrentStep((currentStep + 1) % 16);
    }
  }, (60000/bpm)/10);
  return () => {
    clearTimeout(timer);
  };
}, [currentStep, isOn, bpm]);

/*
// modify that
// reset when stop
useEffect(() => {
  if (!isOn) {setCurrentStep(0)}
}, [isOn])
*/

// new
useEffect(() => {
  if (isOn) {setDisplay(beat+1)}
  else {setDisplay("Click to Start !")}
}, [, currentStep])

// old
/*
useEffect(() => {
  if (isOn) {setDisplay(currentStep+1)}
  else {setDisplay("Click to Start !")}
}, [isOn, currentStep])
*/

useEffect(() => {
  if (!isOn) {PlayStopButton = <FaPlay onClick={startStop} className="icon" /> }
  else {PlayStopButton = <FaStop onClick={startStop} className="icon" /> }
}, [isOn])

useEffect(() => {
  if(mood == "tekno") {
    players = playerstekno;
  } else if(mood == "dub") {
    players = playersdub;
  } else if(mood == "jungle") {
    players = playersjungle;
  }
}, [mood] )
// old
/*
useEffect(() => {
  if(mood == "tekno") {
    setDataArray(createDataArray(datatekno))
  } else if(mood == "dub") {
    setDataArray(createDataArray(datadub))
  } else if(mood == "jungle") {
    setDataArray(createDataArray(datajungle))
  }
}, [mood] )
*/

// themes
useEffect(() => {
  if(mood == "tekno") {
    document.documentElement.style.setProperty('--color1', '#000000');
    document.documentElement.style.setProperty('--color2', '#323232');
    document.documentElement.style.setProperty('--color3', '#FF1E56');
    document.documentElement.style.setProperty('--color4', '#FFAC41');
    document.documentElement.style.setProperty('--color5', '#575757');
  } else if(mood == "dub") {
    document.documentElement.style.setProperty('--color1', '#000000');
    document.documentElement.style.setProperty('--color2', '#123e01');
    document.documentElement.style.setProperty('--color3', '#fae409');
    document.documentElement.style.setProperty('--color4', '#d4291d');
    document.documentElement.style.setProperty('--color5', '#185302');
  } else if(mood == "jungle") {
    document.documentElement.style.setProperty('--color1', '#000000');
    document.documentElement.style.setProperty('--color2', '#0a2b1b');
    document.documentElement.style.setProperty('--color3', '#8f9b45');
    document.documentElement.style.setProperty('--color4', '#dfd97f');
    document.documentElement.style.setProperty('--color5', '#445f38');
  }
}, [mood] )

// -----   SET STATE METHODS   -----

const startStop = () => {
  beat = 0;
  if(isOn) {
    Tone.Transport.stop();
    setIsOn(false);
    
  } else { // if was off
    if(!started) {
      Tone.start();
      configLoop();
      setStarted(true);
    }
    setIsOn(true);
    Tone.Transport.start();
  }
};
// old
/*
// Set isOn
const startStop = () => {
  if(isOn) {
    setIsOn(false)
  } else {setIsOn(true)}
  console.log(volume)
}
*/

// modify that
// Set BPM
const handleBpmChange = (event) => {
  setBpm(event.target.value) // just for rerender
  Tone.Transport.bpm.value = event.target.value;
}

// modify that
// Set Volumes
const handleVolumeChange = e => {
  const { name, value } = e.target;
  setVolume(prevState => ({
      ...prevState,
      [name]: parseFloat(value)
  }));
};

// Set Mood
const handleIncrementMood = () => {
  if(moodArray.indexOf(mood) < moodArray.length - 1) {
    setMood(moodArray[moodArray.indexOf(mood) + 1])
  } else {
    setMood(moodArray[0])
  }
}
const handleDecrementMood = () => {
  if(moodArray.indexOf(mood) > 0) {
    setMood(moodArray[moodArray.indexOf(mood) - 1])
  } else {
    setMood(moodArray[moodArray.length - 1])
  }
}

// Set Sequence
const handleSequence = (e, s) => {
  const id = e.target.id;
  const step = s;
  const instIndex = parseInt(id.slice(-1)-1);
  let newArr = [...sequence];
  if(newArr[instIndex][step] == 0) {
    newArr[instIndex][step] = 1;
  } 
  else if(newArr[instIndex][step] == 1) {
    newArr[instIndex][step] = 0;
  }
  setSequence(newArr);
}

/*
const handleSequenceSave = () => {
  var actualSequence = sequence.concat();
  var sequenceToSave = { ...savedSequence}
    sequenceToSave = actualSequence.toString();
    setSavedSequence(sequenceToSave);
}
*/

/*
const handleSequenceSave = () => {
  var actualSequence = sequence.concat();
  var sequenceToSave = { ...savedSequence}
  if(mood == "tekno") {
    sequenceToSave.tekno = actualSequence.toString();
    setSavedSequence(sequenceToSave);
  } else if(mood == "dub") {
    sequenceToSave.dub = actualSequence.toString();
    setSavedSequence(sequenceToSave);
  } else if(mood == "jungle") {
    sequenceToSave.jungle = actualSequence.toString();
    setSavedSequence(sequenceToSave);
  }
}
*/
/*
  console.log("mood    " + mood)
  console.log("empty sequence    " + emptySequence)
  console.log("saved Sequence    " + savedSequence)
  console.log("saved Tekno Sequence    " + savedSequence.tekno)
  console.log("saved Dub Sequence    " + savedSequence.dub)
  console.log("saved Jungle Sequence    " + savedSequence.jungle)
  console.log("saved Sequence    " + savedSequence)
  console.log("actual Sequence   " + actualSequence)
  console.log("Sequence    " + sequence)
}
*/

// -----   SUB METHODS   -----

// convert back a sequence string to an array of arrays, will help with Smart Contract
const deparseSequence = (sequence) => {
  var fullArray = sequence.split(",");
  for (let a in fullArray ) {
      fullArray[a] = parseInt(fullArray[a], 10);
  }
  let array1 = fullArray.slice(0, 8);
  let array2 = fullArray.slice(8, 16);
  let array3 = fullArray.slice(16, 24);
  let array4 = fullArray.slice(24, 32);
  let array5 = fullArray.slice(32, 40);
  let array6 = fullArray.slice(40, 48);
  let array7 = fullArray.slice(48, 56);
let finalArray = [array1, array2, array3, array4, array5, array6, array7];
return finalArray;
}


// -----   RETURN   -----


return (
<div id="groove-box">
  <div id="startstop">
    {PlayStopButton}
  </div>
  <form id="bpm">
    <label for="points"></label>
    <div id="bpmdisplay">BPM : {Math.floor(Tone.Transport.bpm.value)}</div>
    <input type="range" id="points" name="points" min="60" max="320" className="slider" onInput={handleBpmChange} onChange={handleBpmChange}></input>
  </form>
  <div id="displaywrapper">
    <div id="display">
      {mood} - {display}
    </div>
    <div id="bankbutton">
      <FaCaretUp className="icon" onClick={handleIncrementMood} />
      <div style={{fontSize:'0.5em'}}>Bank</div>
      <FaCaretDown className="icon" onClick={handleDecrementMood} />
    </div>
  </div>
  <button id="savebutton" onClick={props.saveSequence}>Save</button>
  <div id="switches" className="switchesandvolume">
    <div className="gridrow">
      {dataArray[0].map((d) =>
      <Switch 
      key={d.id + d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins01" id="ins01Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>
    
    <div className="gridrow">
      {dataArray[1].map((d) =>
      <Switch 
      key={d.id+ d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins02" id="ins02Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>

    <div className="gridrow">
      {dataArray[2].map((d) =>
      <Switch 
      key={d.id+ d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins03" id="ins03Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>
    <div className="gridrow">
      {dataArray[3].map((d) =>
      <Switch 
      key={d.id+ d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins04" id="ins04Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>
    <div className="gridrow">
      {dataArray[4].map((d) =>
      <Switch 
      key={d.id+ d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins05" id="ins05Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>
    <div className="gridrow">
      {dataArray[5].map((d) =>
      <Switch 
      key={d.id+ d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins06" id="ins06Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>
    <div className="gridrow">
      {dataArray[6].map((d) =>
      <Switch 
      key={d.id+ d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins07" id="ins07Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>
    <div className="gridrow">
      {dataArray[7].map((d) =>
      <Switch 
      key={d.id+ d.step} src={d.src} letter={d.letter} id={d.id} step={d.step} beat={beat} isOn={isOn} volume={volume} handleSequence={handleSequence} />
      )}
      <form className="volume">
        <label for="points"></label>
        <input type="range" name="ins08" id="ins08Volume" min="0" max="1" step="0.01" className="slider" onInput={handleVolumeChange} onChange={handleVolumeChange}></input>
      </form>
    </div>
  </div>
</div>
  );
})

export default Groovebox;