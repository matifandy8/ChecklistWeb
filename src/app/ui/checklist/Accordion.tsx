import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AccordionProps } from "@/app/lib/types";

export default function Accordion({
  title,
  links,
  id,
  onCheckboxChange,
  checkedItems,
}: AccordionProps) {
  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    onCheckboxChange(value, checked);
    setCheckboxes((prevCheckboxes) => ({ ...prevCheckboxes, [value]: checked }));
  };

  const handleReset = () => {
    setCheckboxes({});
  };
  useEffect(() => {
    if(checkedItems.length === 0){
      handleReset();
    }
  }, [checkedItems]);
  return (
    <div className="accordion">
      <input type="checkbox" id={id} className="accordion-tab" />
      <label className="accordion-label nb-label" htmlFor={id}>
        {title}
        <input
          type="checkbox"
          id=""
          className="nb-checkbox"
          name=""
          value={id}
          onChange={handleChange}
          checked={checkboxes[id] || false}
        />
      </label>
      <div className="accordion-content">
        <ul>
          {links.map((link) => (
            <li key={link.titleUrl}>
              <Link href={link.url} rel="noopener noreferrer" target="_blank">
                {link.titleUrl}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
