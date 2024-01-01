"use client";

import "./createForm.styles.css";
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";

interface FormData {
    title: string;
    description: string;
    url: string;
};
const requiredSchema = Yup.object().shape({
    title: Yup.string()
        .required("Title is required")
        .max(255, "Title is too long"),
    description: Yup.string()
        .required("Description is required")
        .max(255, "Description is too long"),
    url: Yup.string().matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, "Invalid URL format")
        .required("URL is required")
        .max(255, "URL is too long")
});
export default function CreateForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(requiredSchema),
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleFormSubmit = async (data: FormData) => {
        console.log(data);
        if(data.title && data.description && data.url){
            setSuccessMessage('Checklist created successfully');
            reset();
        }else{
            setSuccessMessage('Please fill all the fields');
        }

    };
    const handleInputChange = () => {
        setSuccessMessage('');
    };
    return (
        <div className="CreateForm">
            <h1></h1>
            <div className="CreateForm__container">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <input className="nb-input default" type="text" placeholder="Title" required onFocus={handleInputChange}
                        {...register("title", { required: true })} />
                    <input className="nb-input default" type="text" placeholder="Description" required onFocus={handleInputChange}
                        {...register("description", { required: true })} />
                    <input className="nb-input default" type="text" placeholder="URL" name="url" required />
                    {successMessage && <p className="alert success">{successMessage}</p>}
                    <button className="nb-button orange" type="submit">Create</button>
                </form>
            </div>

        </div>
    );
}