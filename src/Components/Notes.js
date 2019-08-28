import React, { Component } from 'react';
import NoteItem from './NoteItem.js';

class Notes extends Component {
    render() {
        return this.props.notes.map((note) => (
            <NoteItem key= {note.id} note = {note} />
        ));  
    }
}

export default Notes;
