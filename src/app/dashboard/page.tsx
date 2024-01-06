"use client";
import React, { useState } from 'react';
import "./Dashboard.styles.css";
import NewChecklist from '../ui/NewChecklist/NewChecklist';
const { websiteData } = require('../lib/data');

export default function Dashboard() {
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
        <section className="dashboard">
                <h1>Create your Checklist</h1>
                <NewChecklist />
                {/* // show your checklists */}
                <div className='dashboard__checklists'>
                    <h2>Your Checklists</h2>
                    <ul>
                        <a href="/checklists/checklist1">Checklist 1</a>
                        <a href="/checklists/checklist2">Checklist 2</a>
                        <a href="/checklists/checklist3">Checklist 3</a>
                    </ul>
                </div>
        </section>
    );
}
