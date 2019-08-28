import React, { Component } from 'react';
import NoteItem from './NoteItem.js';
import PropTypes from 'prop-types';

class Notes extends Component {
    render() {
        return this.props.notes.map((note) => (
            <NoteItem key= {note.id} note = {note} />
        ));  
    }
}

Notes.propTypes = {
    notes: PropTypes.array.isRequired
}

export default Notes;
