import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';

const NoteApp = () => {
  const [notes, dispatch ] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_NOTE', title, body })
    setTitle('');
    setBody('');
  }

  const removeNote = (title) => {
    dispatch({ type: 'REMOVE_NOTE', title })
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('hooks-notes'));

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hooks-notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <p>Add title</p>
      <form onSubmit={addNote}>
        <input placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  )
}

export { NoteApp as default }