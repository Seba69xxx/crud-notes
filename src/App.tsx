import React, { useState, useEffect } from 'react';
import './App.css';
import { Note } from './models';
import { NoteCard } from './components/NoteCard';
import { NotesForm } from './components/NotesForm';

const API_URL = 'http://localhost:7070/notes';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleAddNote = (content: string) => {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 0, content }),
    })
    .then(() => loadNotes());
  };

  const handleDeleteNote = (id: number) => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    .then(() => loadNotes());
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Notes</h1>
        <button className="refresh-btn" onClick={loadNotes}>
          ⟳
        </button>
      </div>

      <div className="notes-grid">
        {notes.map(note => (
          <NoteCard 
            key={note.id} 
            note={note} 
            onDelete={handleDeleteNote} 
          />
        ))}
      </div>

      <NotesForm onAdd={handleAddNote} />
    </div>
  );
}

export default App;
