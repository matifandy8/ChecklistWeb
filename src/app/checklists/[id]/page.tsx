"use client"

import Loading from "@/components/Loading/loading";
import { useEffect, useState } from "react";
import "./checklist.styles.css";
import CategorySection from "@/app/ui/checklist/CategorySection";
import ProgressBar from "@/app/ui/checklist/ProgressBar";
import supabase from "@/app/lib/supabase";
import convertData from "@/app/lib/convertData";
import Link from "next/link";

export default function page({ params }: { params: { id: string } }) {
    const [checkedItems, setCheckedItems] = useState<{ value: string; checked: boolean; }[]>([]);
    const [checklistJson, setChecklistJson] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('tasks').select('*').eq('name', params.id);
                if (data) {
                    setChecklistJson(data)
                } else if (error) {
                    console.error("Error fetching checklist data:", error);
                }
            } catch (error) {
                console.error("Error fetching checklist data:", error);
            }
        };
        fetchData();
    }, [params.id]);


    const handleCheckboxChange = (value: string, checked: boolean) => {
        setCheckedItems((prevCheckedItems) => {
            const updatedCheckedItems = [...prevCheckedItems];
            const existingItem = updatedCheckedItems.find(item => item.value === value);
            if (existingItem) {
                updatedCheckedItems.splice(updatedCheckedItems.indexOf(existingItem), 1);
            } else {
                updatedCheckedItems.push({ value, checked });
            }
            return updatedCheckedItems;
        });
    };
    const handleResetCheckboxes = () => {
        setCheckedItems([]);
    };

    const totalItems = convertData(checklistJson)?.reduce(
        (acc: number, item: any) => acc + item.data.length,
        0
    );
    if (!checklistJson) {
        return <Loading />
    }
    return (
        <section className="checklist">
            <h1>Checklist Name</h1>
            <div className="checklist__container">
                {checklistJson && checklistJson.length > 0 ? (
                    convertData(checklistJson)?.map((item: any) => (
                        <CategorySection
                            key={item.id}
                            title={item.category}
                            data={item.data}
                            onCheckboxChange={handleCheckboxChange}
                            checkedItems={checkedItems}
                        />
                    ))
                ) : (
                    <div>
                        <p>No checklist items found</p>
                        <Link className='nb-button blue rounded' href={`/checklists/edit/${params.id}`}>Add Task</Link>
                    </div>
                )}
            </div>
            <ProgressBar completes={checkedItems.length} totalItems={totalItems} />
            <p className='checklist__completed'>
                You have completed <strong>{checkedItems.length}</strong> out of <strong>{totalItems}</strong>
            </p>
            <div className="checklist__reset">
                <button className='nb-button orange rounded' onClick={handleResetCheckboxes}>Reset</button>
            </div>
            <div className="checklist__createButton">
                <Link href={`/checklists/edit/${params.id}`} className='nb-button blue rounded'>Edit</Link>
            </div>
        </section>
    )
}

function cookies() {
    throw new Error("Function not implemented.");
}
