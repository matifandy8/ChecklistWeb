"use client";
import React, { Suspense, useState } from 'react';
import "./Dashboard.styles.css";
import Loading from '../loading';
import CategorySection from '../ui/dashboard/CategorySection';
import ProgressBar from '../ui/dashboard/ProgressBar';
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
            <h1>Dashboard</h1>
            <div className="dashboard__container">
            <Suspense fallback={<Loading/>}>
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
            <p className='dashboard__completed'>
                You have completed <strong>{checkedItems.length}</strong> out of <strong>{totalItems}</strong>
            </p>
            <div className="dashboard__reset">
                <button className='nb-button orange rounded' onClick={handleResetCheckboxes}>Reset</button>
            </div>
            <div className="dashboard__create">
                <button className='nb-button green rounded' onClick={() => window.location.href = '/checklists'}>Create your own checklist</button>
            </div>
        </section>
    );
}