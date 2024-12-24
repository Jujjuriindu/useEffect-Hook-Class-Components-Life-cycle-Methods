import React, { Component } from "react";

export default class ComClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      wickets: 0,
    };
  }

  componentDidMount=()=>{
    console.log("Class Component Load");
  }

  componentWillUnmount=()=>{
    console.log("Class Component Unload");
  }

  shouldComponentUpdate=()=>{
    console.log("Class Component - shouldComponentUpdate");
    return true;
  }

  componentDidUpdate=()=>{
    console.log("Class Component - ComponentDidUpdate");
  }

  render() {
    console.log("Render");
    return (
      <div className="functCom">
        <h1>Class Component</h1>
        <h2>Score:{this.state.score}</h2>
        <h2>Wickets:{this.state.wickets}</h2>
        <button 
        onClick={() => {
            this.setState({score:this.state.score+1});
        }}>Increment Score</button>
        <button 
        onClick={() => {
            this.setState({score:this.state.score-1});
        }}>Decrement Score</button>
        <button 
        onClick={() => {
            this.setState({wickets:this.state.wickets+1});
        }}>Increment Wickets</button>
        <button 
        onClick={() => {
            this.setState({wickets:this.state.wickets-1});
        }}>Decrement Wickets</button>
      </div>
    );
  }
}
