import React, { Component } from 'react';

class Notes extends Component {
    render() {
        return this.props.notes.map((note) => (
            <h3>{ note.title }</h3>
        ));
    }
}

export default Notes;
