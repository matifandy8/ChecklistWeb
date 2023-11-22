"use client";

import Link from "next/link";

export default function Accordion({ title, links, id, onCheckboxChange }: { title: string, id: string, links: { title: string, url: string }[] , onCheckboxChange: (value: string, checked: boolean) => void }) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        onCheckboxChange(value, checked);
    };

    return (
        <div className="accordion">
            <input type="checkbox" id={id} className="accordion-tab" />
            <label className="accordion-label nb-label" htmlFor={id}>
                {title}
                <input type="checkbox" id="" className="nb-checkbox" name="" value={id} onChange={handleChange} />
            </label>
            <div className="accordion-content">
                <ul>
                    {links.map((link) => (
                        <li key={link.title}>
                            <Link href={link.url} rel="noopener noreferrer" target="_blank">{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}