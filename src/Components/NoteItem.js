import React, { Component } from 'react';

export class NoteItem extends Component {
    render () {
        return (
            <div>
                <p>{this.props.note.title}</p>
            </div>
        )
    }
}

export default NoteItem