"use client";

import CreateTaskForm from "@/app/ui/checklist/CreateTaskForm";
import EditTask from "@/app/ui/checklist/EditTask";
import "./styles.css";
import supabase from "@/app/lib/supabase";
import { useEffect, useState } from "react";
import { EditedTask } from "@/app/lib/types";
import convertData from "@/app/lib/convertData";
import { useRouter } from "next/navigation";


export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter();

    const [checklistJson, setChecklistJson] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

    const handleTaskSave = async (editedTask: EditedTask) => {
        try {
            const { id_task, title, titleurl, url } = editedTask;
            const { data, error } = await supabase
                .from('tasks')
                .update({ title, titleurl, url })
                .eq('id_task', id_task);
            if (error) {
                console.error('Error updating task:', error.message);
                setErrorMessage("Error updating task");
            } else {
                setSuccessMessage('Task updated successfully');
                router.push(`/checklists/${id_task}`);
            }
        } catch (error: any) {
            console.error('Error updating task:', error.message);
        }
    };

    const handleTaskDelete = async (deletedTask: EditedTask) => {
        try {
            const { id_task } = deletedTask;
            const { data, error } = await supabase
                .from('tasks')
                .delete()
                .eq('id_task', id_task);
            if (error) {
                console.error('Error deleting task:', error.message);
                setErrorMessage("Error deleting task");
            } else {
                setSuccessMessage('Task deleted successfully');
                router.push(`/checklists/${deletedTask.id_task}`);
            }
        } catch (error: any) {
            console.error('Error deleting task:', error.message);
        }
    }

    return (
        <div>
            <h1>Edit</h1>
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
                        {successMessage && <p className="alert success">{successMessage}</p>}
                        {errorMessage && <p className="alert error">{errorMessage}</p>}
                    </div>
                ))}

            </div>

        </div>
    )
}