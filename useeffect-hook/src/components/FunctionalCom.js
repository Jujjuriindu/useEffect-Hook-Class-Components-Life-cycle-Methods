import React, { useEffect, useState } from "react";

function FunctionalCom() {
  let [score, setScore] = useState(0);
  let [wickets, setWickets] = useState(0);

  useEffect(()=>{
    console.log("Functional Component Load");
  },[])

  useEffect(()=>{
    return ()=>{
        console.log("Functional Component Unload")
    }
  },[])

  useEffect(()=>{
    console.log("Functional Component - Score state variable changed");
  },[score])

  useEffect(()=>{
    console.log("Functional Component - Wickets state variable changed");
  },[wickets])

  useEffect(()=>{
    console.log("Functional Component - Score/Wickets state variable changed");
  },[score,wickets])

  useEffect(()=>{
    console.log("Functional Component - Any state variable changed");
  })
  return (
    <div className="functCom">
      <h1>Functional Component</h1>
      <h2>Score:{score}</h2>
      <h2>Wickets:{wickets}</h2>
      <button
        onClick={() => {
          setScore(score + 1);
        }}>Increment Score
      </button>
      <button
        onClick={() => {
          setScore(score - 1);
        }}>Decrement Score
      </button>
      <button
        onClick={() => {
          setWickets(wickets + 1);
        }}>Increment Wickets
      </button>
      <button
        onClick={() => {
          setWickets(wickets - 1);
        }}>Decrement Wickets
      </button>
    </div>
  );
}

export default FunctionalCom;
