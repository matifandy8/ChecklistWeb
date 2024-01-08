"use client";

import React, { useState } from 'react';
import "./EditTask.styles.css";

const EditTask = ({ task , onSave , onDelete } : any) => {
    console.log(task);
    const [editedTask, setEditedTask] = useState(task);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedTask((prevTask: any) => ({ ...prevTask, [name]: value }));
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
                />
            </div>

            {editedTask.links.map((link: { url: string; title: string }, index: number) => (
                <div key={index} className="edit-task__input">
                    <div>
                        <label htmlFor={`url-${index}`}>URL:</label>
                        <input
                            type="text"
                            id={`url-${index}`}
                            name="url"
                            value={link.url}
                            onChange={(e) => {
                                const updatedLinks = [...editedTask.links];
                                updatedLinks[index] = { ...link, url: e.target.value };
                                setEditedTask((prevTask: any) => ({ ...prevTask, links: updatedLinks }));
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor={`title-${index}`}>Title:</label>
                        <input
                            type="text"
                            id={`title-${index}`}
                            name="title"
                            value={link.title}
                            onChange={(e) => {
                                const updatedLinks = [...editedTask.links];
                                updatedLinks[index] = { ...link, title: e.target.value };
                                setEditedTask((prevTask: any) => ({ ...prevTask, links: updatedLinks }));
                            }
                            }
                        />
                    </div>

                </div>
            ))}
            <div className="edit-task__buttons">
                <button onClick={handleSave} className="nav-item nb-button green rounded">Save</button>
                <button className="nb-button orange rounded" onClick={handleDelete}>Delete</button>
            </div>

        </div>
    );
};

export default EditTask;
