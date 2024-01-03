import { Metadata } from "next";
import NewChecklist from "../ui/NewChecklist/NewChecklist";

export const metadata: Metadata = {
    title: "ChecklistWeb - Checklists",
    description:
        "platform for developers and teams, offering a seamless checklist management experience.",
    openGraph: {
        type: "website",
        url: "https://localhost:3000",
        title: "ChecklistWeb - Checklists",
        description:
            "platform for developers and teams, offering a seamless checklist management experience.",
        images: [
            {
                url: "https://localhost:3000/logo.png",
                width: 800,
                height: 600,
                alt: "ChecklistWeb - Checklists",
            },
        ],
    },
}
export default function CreateChecklist() {
    return (
        <div>
            <h1>Create your Checklist</h1>
            <NewChecklist/>
            {/* // show your current checklists */}
            <div> 
                <h2>Current Checklist</h2>
                <ul>
                    <a href="/checklists/checklist1">Checklist 1</a>
                    <a href="/checklists/checklist2">Checklist 2</a>
                    <a href="/checklists/checklist3">Checklist 3</a>
                </ul>
            </div>
        </div>
    );
}