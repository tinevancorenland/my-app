import React, { Component } from 'react';
import Notes from './Components/Notes';
import './App.css';

class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        title: 'firstnote',
        content: 'description of first note'
      },
      {
        id: 2,
        title: 'secondnote',
        content: 'description of second note'
      },
      {
        id: 3,
        title: 'thirdnote',
        content: 'description of third note'
      }
    ]
  }

  render() {
    // console.log(this.state.notes);
    // check the array of notes in the console log, but also visible in react tools
    return (
      <div className='App'>
        <Notes notes = {this.state.notes} />
      </div>
    );
    }
}

export default App;
