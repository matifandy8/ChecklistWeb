"use client";

import React, { useState } from 'react';
import "./EditTask.styles.css";

const EditTask = ({ task, onSave, onDelete }: any) => {
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
                    className='nb-input default'
                />
            </div>
            

            {editedTask.links.map((link: { url: string; titleUrl: string }, index: number) => (
                <div key={index} className="edit-task__input">
                    <div>
                        <label htmlFor={`titleUrl-${index}`}>Link Title:</label>
                        <input
                            type="text"
                            id={`titleUrl-${index}`}
                            name="titleUrl"
                            value={link.titleUrl}
                            onChange={(e) => {
                                const updatedLinks = [...editedTask.links];
                                updatedLinks[index] = { ...link, titleUrl: e.target.value };
                                setEditedTask((prevTask: any) => ({ ...prevTask, links: updatedLinks }));
                            }
                            }
                            className='nb-input default'
                        />
                    </div>
                    <div>
                        <label htmlFor={`url-${index}`}>Url:</label>
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
                            className='nb-input default'
                        />
                    </div>

                </div>
            ))}
            <div className="edit-task__buttons">
                <button onClick={handleSave} className="nb-button green rounded">Save</button>
                <button className="nb-button orange rounded" onClick={handleDelete}>Delete</button>
            </div>

        </div>
    );
};

export default EditTask;
