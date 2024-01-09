export type Category = {
    id: string;
    title: string;
    links: Array<{
      url: string;
      titleUrl: string;
    }>;
};

export type CategorySectionProps = {
  title: string;
  data: Category[];
  onCheckboxChange: (value: string, checked: boolean) => void;
  checkedItems: { value: string; checked: boolean; }[];
}
  
export type AccordionProps = {
  title: string;
  id: string;
  links: { titleUrl: string; url: string }[];
  onCheckboxChange: (value: string, checked: boolean) => void;
  checkedItems: { value: string; checked: boolean; }[];
}

