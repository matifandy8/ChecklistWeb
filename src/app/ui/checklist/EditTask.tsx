"use client";

import React, { useState } from 'react';
import "./EditTask.styles.css";

const EditTask = ({ id_task, title,titleurl, url, onSave, onDelete }: any) => {
    const [editedTask, setEditedTask] = useState({ id_task, title, titleurl, url });
    console.log(editedTask);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedTask(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSave = () => {
        onSave(editedTask);
    };

    const handleDelete = () => {
        onDelete(editedTask);
    }

    return (
        <div className="edit-task">
            <div>
                <label htmlFor="title">Title:</label>
                <input

                    type="text"
                    id="title"
                    name="title"
                    value={editedTask.title}
                    onChange={handleInputChange}
                    className='nb-input default'
                />
            </div>
            <div>
                <label htmlFor="titleUrl">Title URL:</label>
                <input
                    type="text"
                    id="titleUrl"
                    name="titleUrl"
                    value={editedTask.titleurl}
                    onChange={handleInputChange}
                    className='nb-input default'
                />
            </div>
            <div>
                <label htmlFor="url">URL:</label>
                <input
                    type="text"
                    id="url"
                    name="url"
                    value={editedTask.url}
                    onChange={handleInputChange}
                    className='nb-input default'
                />
            </div>
            

            <div className="edit-task__buttons">
                <button onClick={handleSave} className="nb-button green rounded">Save</button>
                <button className="nb-button orange rounded" onClick={handleDelete}>Delete</button>
            </div>

        </div>
    );
};

export default EditTask;
