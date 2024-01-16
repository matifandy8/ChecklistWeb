"use client"

import Loading from "@/app/loading";
import { Suspense, useEffect, useState } from "react";
import "./checklist.styles.css";
import CategorySection from "@/app/ui/checklist/CategorySection";
import ProgressBar from "@/app/ui/checklist/ProgressBar";
import supabase from "@/app/lib/supabase";


export default function page({ params }: { params: { id: string } }) {
    const [checkedItems, setCheckedItems] = useState<{ value: string; checked: boolean; }[]>([]);
    const [checklistJson, setChecklistJson] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('tasks').select('*').eq('namechecklist', params.id);
                if (data) {
                    if (data.length > 0) {
                        const convertedData = {
                            id: "tab1", 
                            title: data[0].title,
                            links: [
                                {
                                    url: data[0].url,
                                    titleUrl: data[0].titleurl,
                                }
                            ]
                        };
                        setChecklistJson(convertedData);
                    }
                } else if (error) {
                    // Handle error
                    console.error("Error fetching checklist data:", error);
                }
            } catch (error) {
                console.error("Error fetching checklist data:", error);
            }
        };
        fetchData();
    }, [params.id]);
        

    console.log(checklistJson);

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

    const totalItems = checklistJson?.checklist?.reduce(
        (acc: number, item: any) => acc + item.data.length,
        0
    );
    return (
        <section className="checklist">
            <h1>Checklist Name</h1>
            <div className="checklist__container">
                <Suspense fallback={<Loading />}>
                        <CategorySection
                            key={checklistJson?.id}
                            title={checklistJson?.category}
                            data={checklistJson}
                            onCheckboxChange={handleCheckboxChange}
                            checkedItems={checkedItems}
                        />
                </Suspense>
            </div>
            <ProgressBar completes={checkedItems.length} totalItems={totalItems} />
            <p className='checklist__completed'>
                You have completed <strong>{checkedItems.length}</strong> out of <strong>{totalItems}</strong>
            </p>
            <div className="checklist__reset">
                <button className='nb-button orange rounded' onClick={handleResetCheckboxes}>Reset</button>
            </div>
            <div className="checklist__createButton">
                <a href={`/checklists/edit/${params.id}`} className='nb-button blue rounded'>Edit</a>
            </div>

        </section>
    )
}

function cookies() {
    throw new Error("Function not implemented.");
}
