"use client";

import { useState } from 'react';

const NewChecklist = () => {
  const [showInput, setShowInput] = useState(false);
  const [checklistName, setChecklistName] = useState('');

  const handleNewChecklistClick = () => {
    setShowInput(true);
  };

  const handleNameChange = (e) => {
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
    <div>
      {!showInput ? (
        <button onClick={handleNewChecklistClick}>+ New Checklist</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter checklist name"
            value={checklistName}
            onChange={handleNameChange}
          />
          <button onClick={handleSaveChecklist}>Save Checklist</button>
        </div>
      )}
    </div>
  );
};

export default NewChecklist;
