import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
    
    const { dispatch } = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_NOTE', title, body })
        setTitle('');
        setBody('');
    }

    return (
        <form onSubmit={addNote}>
            <input placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
            <button>add note</button>
        </form>
    )
};

export { AddNoteForm as default }