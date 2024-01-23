"use client";

import CreateTaskForm from "@/app/ui/checklist/CreateTaskForm";
import EditTask from "@/app/ui/checklist/EditTask";
import "./styles.css";
import supabase from "@/app/lib/supabase";
import { useEffect, useState } from "react";
import { EditedTask, Task } from "@/app/lib/types";
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

    const handleTaskSave =  async (editedTask: EditedTask) => {
        try {
            const { id_task, title, titleurl, url } = editedTask;
            const { data, error } = await supabase
                .from('tasks')
                .update({ title, titleurl, url })
                .eq('id_task', id_task);
            if (error) {
                console.error('Error updating task:', error.message);
            } else {
                console.log('Task updated successfully:', data);
            }
        } catch (error: any) {
            console.error('Error updating task:', error.message);
        }
    };

    const handleTaskDelete = async (deletedTask: EditedTask) => {
        console.log(deletedTask.id_task);
        try {
            const { id_task } = deletedTask;
            const { data, error } = await supabase
                .from('tasks')
                .delete()
                .eq('id_task', id_task);
            if (error) {
                console.error('Error deleting task:', error.message);
            } else {
                console.log('Task deleted successfully:', data);
            }
        } catch (error: any) {
            console.error('Error deleting task:', error.message);
        }
    }

    return (
        <div>
            <h1>Edit Checklist <span>{params.id}</span></h1>
            <div className="checklist__create">
                <CreateTaskForm task={params.id} />
            </div>
            <div className="checklist__container">
                {convertData(checklistJson)?.map((tasks: any) => (
                    <div key={tasks.id} className="checklist__item">
                        <h2 className="checklist__category">{tasks.category}</h2>
                        {tasks.data.map((task: any) => (
                            <EditTask
                                key={task.id}
                                id_task={task.id}
                                title={task.title}
                                titleurl={task.links[0].titleUrl}
                                url={task.links[0].url}
                                onSave={handleTaskSave}
                                onDelete={handleTaskDelete}
                            />
                        ))}
                    </div>
                ))}

            </div>

        </div>
    )
}