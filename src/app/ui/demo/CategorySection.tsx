import React from 'react';
import Accordion from './Accordion';
import { Category } from '@/app/lib/types';

interface CategorySectionProps {
    title: string;
    data: Category[];
    onCheckboxChange: (value: string, checked: boolean) => void;
}

export default function CategorySection({
    title,
    data,
    onCheckboxChange,
}: CategorySectionProps) {
    return (
        <div className="dialog">
            <h3 className="title">{title}</h3>
            {data?.map((item: Category) => (
                <Accordion
                    key={item.id}
                    title={item.title}
                    id={item.id}
                    links={item.links}
                    onCheckboxChange={onCheckboxChange}
                />
            ))}
        </div>
    );
}
