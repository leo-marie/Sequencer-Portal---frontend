import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import './App.css';
import { ethers } from "ethers";
import abi from './utils/SequencerPortal.json';
import Groovebox from './components/Groovebox';

const App = () => {
/*
* Just a state variable we use to store our user's public wallet.
*/
const [currentAccount, setCurrentAccount] = useState("");
const [allSequences, setAllSequences] = useState([]);
const myRef = useRef();
/**
 * Create a variable here that holds the contract address after you deploy!
 */
const contractAddress = "0xCF9Eda81e57C430ae3e2F0172bD197bFfd1Ded7E";
/**
 * Create a variable here that references the abi content!
 */
const contractABI = abi.abi;

const checkIfWalletIsConnected = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
    /*
    * Check if we're authorized to access any of the account in the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      getAllSequences();
    } else {
      console.log("No authorized account found")
    }
  } catch (error) {
    console.log(error);
  }
}

/**
* Implement your connectWallet method here
*/
const connectWallet = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log("Connected", accounts[0]);
    setCurrentAccount(accounts[0]); 
  } catch (error) {
    console.log(error)
  }
} // connect wallet

const saveSequence = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum); // providers is Metamask node
        const signer = provider.getSigner();
        const sequencerPortalContract = new ethers.Contract(contractAddress, contractABI, signer);

        let count = await sequencerPortalContract.getTotalSequences();
        console.log("Retrieved total sequence count...", count.toNumber());
        /*
        * Execute the actual saveSequence from your smart contract
        */

        const sequenceToSave = myRef.current.getSequence(); // here
        const saveSequenceTxn = await sequencerPortalContract.saveSequence(sequenceToSave, { gasLimit: 3000000 }); // here
        console.log("Mining...", saveSequenceTxn.hash);

        await saveSequenceTxn.wait();
        console.log("Mined -- ", saveSequenceTxn.hash);

        count = await sequencerPortalContract.getTotalSequences();
        console.log("Retrieved total sequence count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
}

  /*
   * Create a method that gets all waves from your contract
   */
const getAllSequences = async () => {
  try {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const sequencerPortalContract = new ethers.Contract(contractAddress, contractABI, signer);
      /*
      * Call the getAllSequences method from Smart Contract
      */
      const sequences = await sequencerPortalContract.getAllSequences();
      /*
      * We only need address, timestamp, and sequence in our UI so let's
      * pick those out
      */
      const sequencesCleaned = sequences.map(seq => {
        return {
          musician: seq.musician,
          timestamp: new Date(seq.timestamp * 1000),
          sequence: seq.sequence,
        };
      });
      /*
      * Store our data in React State
      */
      setAllSequences(sequencesCleaned);
    } else {
      console.log("Ethereum object doesn't exist!")
    }
  } catch (error) {
    console.log(error);
  }
}; // getAllSequences
/**
 * Listen in for emitter events!
 */
useEffect(() => {
  let sequencerPortalContract;

  const onNewSequence = (from, timestamp, seq) => {
    console.log('NewSequence', from, timestamp, seq);
    setAllSequences(prevState => [ // so it re-render
      ...prevState,
      {
        musician: from,
        timestamp: new Date(timestamp * 1000),
        sequence: seq,
      },
    ]);
  };

  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    sequencerPortalContract = new ethers.Contract(contractAddress, contractABI, signer);
    sequencerPortalContract.on('NewSequence', onNewSequence);
  }

  return () => {
    if (sequencerPortalContract) {
      sequencerPortalContract.off('NewSequence', onNewSequence);
    }
  };
}, []); // useEffect
/*
* This runs our function when the page loads.
*/
useEffect(() => {
  checkIfWalletIsConnected();
}, [])
  
return (
  <div className="mainContainer">
    <div className="dataContainer">
      <div className="header">
      Blockchain fueled Sequence Saver
      </div>
      <div className="bio">
      Save your sequence on the Rinkeby Testnet. You have 50% chance to win some (fake) ETH !
      </div>
      {/*
      * If there is no currentAccount render this button
      */}
      {!currentAccount && (
      <button id="connectbutton" onClick={connectWallet}>
        Connect Wallet
      </button>
      )}
      <div id="groovebox-container">
        <Groovebox ref={myRef} saveSequence={saveSequence} />
      </div>
      {allSequences.map((seq, index) => {
          return (
            <div key={index} className="sequenceCard">
              <div>Musician: {seq.musician}</div>
              <div>Time: {seq.timestamp.toString()}</div>
              <div>Sequence: {seq.sequence}</div>
            </div>)
        })}


    </div>
  </div>
);
} // App

export default App