"use client";

import CreateTaskForm from "@/app/ui/checklist/CreateTaskForm";
import EditTask from "@/app/ui/checklist/EditTask";
import "./styles.css";
const { websiteData } = require('../../../lib/data');


export default function page({ params }: { params: { id: string } }) {

    const handleTaskSave = (editedTask: string) => {
        console.log('Edited Task:', editedTask);
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
                {websiteData.map((category: any) => (
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