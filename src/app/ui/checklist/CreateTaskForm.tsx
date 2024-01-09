"use client";

import "./CreateTaskForm.styles.css";
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";

interface FormData {
    category: string;
    title: string;
    titleUrl: string;
    url: string;
};
const requiredSchema = Yup.object().shape({
    category: Yup.string()
        .required("Description is required")
        .max(255, "Description is too long"),
    title: Yup.string()
        .required("Title is required")
        .max(255, "Title is too long"),
    titleUrl: Yup.string()
    .required("Title is required")
    .max(255, "Title is too long"),
    url: Yup.string().matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, "Invalid URL format")
        .required("URL is required")
        .max(255, "URL is too long")
});

const categories = ["Performance", "Security", "Usability", "Functionality", "Compatibility", "Analytics", "Maintenance", "Legal", "Social Media", "Testing"];

export default function CreateTaskForm({ task }: { task: string }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(requiredSchema),
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleFormSubmit = async (data: FormData) => {
        // Create a new task for the checklist
        console.log(data);
        const newTask = {
            id: `${Date.now()}`,
            category: data.category,
            data: [
                {
                    id: `tab${Date.now()}`,
                    title: data.title,
                    links: [{ url: data.url, title: data.titleUrl }],
                },
            ],
        };
        console.log(newTask);
        
        if (data.title && data.category && data.url) {
            // save data to database or post to the api endpoint // api to task with id - task.id 
            setSuccessMessage('Checklist created successfully');
            reset();
        } else {
            setSuccessMessage('Please fill all the fields');
        }

    };
    const handleInputChange = () => {
        setSuccessMessage('');
    };
    return (
        <div className="CreateForm">
            <h2>Add task</h2>
            <div className="CreateForm__container">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <label htmlFor="category">Category</label>
                    <select className="dropdown" onFocus={handleInputChange} {...register("category", { required: true })} placeholder="Select a category">
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    <label htmlFor="title">Title</label>
                    <input className="nb-input default" type="text" placeholder="Enter title" required onFocus={handleInputChange}
                        {...register("title", { required: true })} />
                    <label htmlFor="title">Title Link</label>
                    <input className="nb-input default" type="text" placeholder="Enter title for link" required onFocus={handleInputChange}
                        {...register("titleUrl", { required: true })} />
                    <label htmlFor="url">Url</label>
                    <input className="nb-input default" type="text" placeholder="Enter Url" required onFocus={handleInputChange} {...register("url", { required: true })} />
                    {errors.title && <p className="alert error">{errors.title.message}</p>}
                    {errors.category && <p className="alert error">{errors.category.message}</p>}
                    {errors.url && <p className="alert error">{errors.url.message}</p>}
                    {successMessage && <p className="alert success">{successMessage}</p>}
                    <button className="nb-button blue" type="submit">Create</button>
                </form>
            </div>

        </div>
    );
}