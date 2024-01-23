"use client";

import './NewChecklist.styles.css';
import supabase from '@/app/lib/supabase';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

export default function NewChecklist() {
  const { data: session } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      const { data: nameChecklists, error } = await supabase
        .from('checklists')
        .select('name')
        .eq('user_id', session?.user?.email);
    };

    fetchData();
  }, []);

  const [showInput, setShowInput] = useState(false);
  const [checklistName, setChecklistName] = useState('');

  const handleNewChecklistClick = () => {
    setShowInput(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecklistName(e.target.value);
  };

  const handleSaveChecklist = async () => {
    if (!checklistName) {
      return;
    }
    console.log('Checklist saved:', checklistName);
    try {
      const { data, error } = await supabase.from('checklists').insert({ name: checklistName, user_id: session?.user?.email }).select();
      if (error) {
          console.error('Error saving checklist :', error.message);
      } else {
          console.log('Checklist saved successfully:', data);
      }
  } catch (error: any) {
      console.error('Error saving checklist:', error.message);
  }

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

