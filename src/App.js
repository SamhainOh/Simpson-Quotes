import React, { Component } from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayCharacter from './DisplayCharacter';

const sampleCharacter = 
  {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  };



class App extends Component {
  constructor(props){
    super(props);
    this.state = { character : sampleCharacter };
  }

getCharacter () {
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
  .then (response => response.json())
  .then(data => {
    this.setState({
      character:data [0]
    });
  });
}

  render() {
    return (
      <div className="App">
        <DisplayCharacter character = {this.state.character}/>
        <GenerateQuote selectQuote = {() => this.getCharacter()}/>
      </div>
      
    );
  }
}

export default App;
