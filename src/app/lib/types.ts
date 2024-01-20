
export type CategoryData = {
  id: string;
  category: string;
  data: Task[];
}
export type Task = {
  id: string;
  title: string;
  links: Array<{
    url: string;
    titleUrl: string;
  }>;
};

export type CategorySectionProps = {
  title: string;
  data: Task[];
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

export interface InputDataItem {
  id: number;
  title: string;
  category: string;
  url: string;
  titleurl: string;
}

export interface ConvertedDataItem {
  id: number;
  title: string;
  links: { url: string; titleUrl: string }[];
}

export interface ConvertedCategory {
  category: string;
  data: ConvertedDataItem[];
}