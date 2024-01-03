import CreateTaskForm from "@/app/ui/checklists/CreateTaskForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ChecklistWeb - Edit",
    description:
        "platform for developers and teams, offering a seamless checklist management experience.",
    openGraph: {
        type: "website",
        url: "https://localhost:3000",
        title: "ChecklistWeb - Edit",
        description:
            "platform for developers and teams, offering a seamless checklist management experience.",
        images: [
            {
                url: "https://localhost:3000/logo.png",
                width: 800,
                height: 600,
                alt: "ChecklistWeb - Edit",
            },
        ],
    },
}
export default function page({ params }: { params: { id: string } }) {

    return (
        <div>
            <h1>Edit Checklist <span>{params.id}</span></h1>
            <CreateTaskForm />
        </div>
    )
}