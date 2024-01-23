"use client";

import CreateTaskForm from "@/app/ui/checklist/CreateTaskForm";
import EditTask from "@/app/ui/checklist/EditTask";
import "./styles.css";
import supabase from "@/app/lib/supabase";
import { useEffect, useState } from "react";
import { Task } from "@/app/lib/types";
import convertData from "@/app/lib/convertData";


export default function page({ params }: { params: { id: string } }) {
    const [checklistJson, setChecklistJson] = useState<any>(null);

    const fetchchecklistData = async () => {
        try {
            const { data, error } = await supabase.from('tasks').select('*').eq('id_checklist', params.id);
            if (data) {
                setChecklistJson(data);
            } else if (error) {
                console.error("Error fetching checklist data:", error);
            }
        } catch (error) {
            console.error("Error fetching checklist data:", error);
        }
    }

    useEffect(() => {
        fetchchecklistData();
    }, [params.id]);

    const handleTaskSave = (editedTask: string) => {
        console.log('Edited Task:', editedTask);
    //    const { data, error } = supabase.from('tasks').update({task: editedTask}).eq('id_task', editedTask.id);
    //    console.log(data);

    };
    console.log(checklistJson)

    const handleTaskDelete = (deletedTask: Task) => {
        console.log(deletedTask.id);
    }
    return (
        <div>
            <h1>Edit Checklist <span>{params.id}</span></h1>
            <div className="checklist__create">
                <CreateTaskForm task={params.id} />
            </div>
            <div className="checklist__container">
                {/* {convertData(checklistJson)?.map((tasks: any) => (
                    <div key={tasks.id} className="checklist__item">
                        <h2 className="checklist__category">{tasks.category}</h2>
                        {tasks.data.map((task: Task) => (
                            <div key={task.id}>
                                <EditTask task={task} onSave={handleTaskSave} onDelete={handleTaskDelete} />
                            </div>
                        ))}
                    </div>
                ))} */}
            </div>

        </div>
    )
}