import React, { useState } from 'react';

interface NotesFormProps {
  onAdd: (content: string) => void;
}

export const NotesForm: React.FC<NotesFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    onAdd(content);
    setContent('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">New Note</label>
      <textarea
        className="note-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit" className="add-btn">
        ➤
      </button>
    </form>
  );
};
