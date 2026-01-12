import React from 'react';
import { Note } from '../models';

interface NoteCardProps {
  note: Note;
  onDelete: (id: number) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  return (
    <div className="note-card">
      <p>{note.content}</p>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(note.id)}
      >
        ✖
      </button>
    </div>
  );
};
