import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoteItem extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.note.title}</h3>
                <p>{this.props.note.content}</p>
            </div>
        )
    }
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}

export default NoteItem