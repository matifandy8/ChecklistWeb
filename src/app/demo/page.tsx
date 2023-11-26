"use client";
import React, { Suspense, useState } from 'react';
import CategorySection from "../ui/demo/CategorySection";
import ProgressBar from "../ui/demo/ProgressBar";
import "./Demo.styles.css";
import Loading from '../loading';
const { websiteData } = require('../lib/data');

export default function Demo() {
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
        <section className="demo">
            <h1>Demo</h1>
            <div className="demo__container">
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
            <div className="demo__reset">
                <button className='nb-button orange rounded' onClick={handleResetCheckboxes}>Reset</button>
            </div>
        </section>
    );
}
