"use client";
import React, { useState } from 'react';
import CategorySection from "../ui/demo/CategorySection";
import ProgressBar from "../ui/demo/ProgressBar";
import "./Demo.styles.css";
const { websiteData } = require('../lib/data');

export default function Demo() {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (value, checked) => {
        setCheckedItems((prevCheckedItems) => {
            if (checked) {
                return [...prevCheckedItems, value];
            } else {
                return prevCheckedItems.filter((item) => item !== value);
            }
        });
    };

    return (
        <section className="demo">
            <h1>Demo</h1>
            <div className="demo__container">
                {websiteData?.map((item: any) => (
                    <CategorySection
                        key={item.id}
                        title={item.title}
                        data={item.data}
                        onCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
            <ProgressBar completes={checkedItems.length} totalItems={9} />
        </section>
    );
}
