"use client";

import CreateTaskForm from "@/app/ui/checklist/CreateTaskForm";
import EditTask from "@/app/ui/checklist/EditTask";
import "./styles.css";
import supabase from "@/app/lib/supabase";
import { useEffect, useState } from "react";


export default function page({ params }: { params: { id: string } }) {
    const [checklistJson, setChecklistJson] = useState<any>(null);

    const fetchchecklistData = async () => {
        try {
            const { data, error } = await supabase.from('checklists').select('checklist').eq('namechecklist', params.id);
            if (data) {
                setChecklistJson(data[0]);
            } else if (error) {
                console.error("Error fetching checklist data:", error);
            }
        } catch (error) {
            console.error("Error fetching checklist data:", error);
        }
    }

    useEffect(() => {
        fetchchecklistData();
    })

    const handleTaskSave = (editedTask: string) => {
        console.log('Edited Task:', editedTask);
        // Save the edited task to the database
        // const { data, error } = supabase.from('tasks').update({ title: editedTask }).eq('id', editedTask);
    };

    const handleTaskDelete = (deletedTask: any) => {
        console.log(deletedTask.id);
    }
    return (
        <div>
            <h1>Edit Checklist <span>{params.id}</span></h1>
            <div className="checklist__create">
                <CreateTaskForm task={params.id} />
            </div>
            <div className="checklist__container">
                {checklistJson?.checklist.map((category: any) => (
                    <div key={category.id} className="checklist__item">
                        <h2 className="checklist__category">{category.category}</h2>
                        {category.data.map((task: any) => (
                            <div key={task.id}>
                                <h3>{task.title}</h3>
                                <EditTask task={task} onSave={handleTaskSave} onDelete={handleTaskDelete}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        
        </div>
    )
}