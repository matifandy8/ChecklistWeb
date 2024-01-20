import React from 'react';
import Accordion from './Accordion';
import { CategorySectionProps, Task } from '@/app/lib/types';


export default function CategorySection({
    title,
    data,
    onCheckboxChange,
    checkedItems
}: CategorySectionProps) {
    console.log(data)
    return (
        <div className="dialog animated">
            <h3 className="title">{title}</h3>
            {data.map((item: Task) => (
                <Accordion
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    links={item.links}
                    onCheckboxChange={onCheckboxChange}
                    checkedItems={checkedItems}
                />
            ))}
        </div>
    );
}
