import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      working : false
    };
  }

  render() {
    const test = this.state.working ? logo : 'https://vignette.wikia.nocookie.net/simpsons/images/a/a1/Marge_Simpsons.png/revision/latest?cb=20130817213926&path-prefix=fr'
    const status = this.state.working ? 'Working':'On break';
    return (
      <div className="App">
        <header className="App-header">
          <img src={test} className= "AppLogo" alt="logo"/>
          <h1 className ="App-title">Simpsons Quotes</h1>
        </header>

        <button 
        onClick= { () =>{
          this.setState({working: !this.state.working})
        }}
        className = 'Homer'>{status}
        </button>
      </div>
      
    );
  }
}

export default App;
