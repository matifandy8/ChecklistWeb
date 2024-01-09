"use client"

import Loading from "@/app/loading";
import { Suspense, useState } from "react";
import "./checklist.styles.css";
import CategorySection from "@/app/ui/checklist/CategorySection";
import ProgressBar from "@/app/ui/checklist/ProgressBar";

const { websiteData } = require('../../lib/data');


export default function page({ params }: { params: { id: string } }) {

    const [checkedItems, setCheckedItems] = useState<{ value: string; checked: boolean; }[]>([]);

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

    const totalItems = websiteData?.reduce(
        (acc: number, item: any) => acc + item.data.length,
        0
    );
    return (
        <section className="checklist">
            <h1>Checklist Name</h1>
            <div className="checklist__container">
                <Suspense fallback={<Loading />}>
                    {websiteData?.map((item: any) => (
                        <CategorySection
                            key={item.id}
                            title={item.category}
                            data={item.data}
                            onCheckboxChange={handleCheckboxChange}
                            checkedItems={checkedItems}
                        />
                    ))}
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