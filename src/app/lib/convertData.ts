import { ConvertedCategory, InputDataItem } from "./types";

const convertData = (inputData: InputDataItem[] | null | undefined): ConvertedCategory[] => {
  if (!inputData) {
    return [];
  }

  const result: ConvertedCategory[] = [];

  inputData.forEach((item) => {
    // Check if category already exists in result
    const existingCategoryIndex = result.findIndex((category) => category.category === item.category);

    if (existingCategoryIndex !== -1) {
      // Category exists, add the item to the existing category
      result[existingCategoryIndex].data.push({
        id: item.id_task,
        title: item.title,
        links: [
          {
            url: item.url,
            titleUrl: item.titleurl,
          },
        ],
      });
    } else {
      // Category doesn't exist, create a new category
      result.push({
        category: item.category,
        data: [
          {
            id: item.id_task,
            title: item.title,
            links: [
              {
                url: item.url,
                titleUrl: item.titleurl,
              },
            ],
          },
        ],
      });
    }
  });

  return result;
};

export default convertData;