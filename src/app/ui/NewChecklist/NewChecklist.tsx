"use client";

import { useState } from 'react';
import './NewChecklist.styles.css';

const NewChecklist = () => {
  const [showInput, setShowInput] = useState(false);
  const [checklistName, setChecklistName] = useState('');

  const handleNewChecklistClick = () => {
    setShowInput(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecklistName(e.target.value);
  };

  const handleSaveChecklist = () => {
    // Implement the logic to save the checklist
    console.log('Checklist saved:', checklistName);

    // Reset the state
    setShowInput(false);
    setChecklistName('');
  };

  return (
    <div className="NewChecklist">
      {!showInput ? (
        <button onClick={handleNewChecklistClick} className="nav-item nb-button green rounded">+ New Checklist</button>
      ) : (
        <div className="NewChecklist__input">
          <input
            type="text"
            placeholder="Enter checklist name"
            value={checklistName}
            onChange={handleNameChange}
            className="nb-input default"
          />
          <button onClick={handleSaveChecklist} className="nav-item nb-button green rounded">Save Checklist</button>
        </div>
      )}
    </div>
  );
};

export default NewChecklist;
