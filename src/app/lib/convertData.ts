interface InputDataItem {
    id: number;
    title: string;
    category: string;
    url: string;
    titleurl: string;
  }
  
  interface ConvertedDataItem {
    id: number;
    title: string;
    links: { url: string; titleUrl: string }[];
  }
  
  interface ConvertedCategory {
    category: string;
    data: ConvertedDataItem[];
  }
  
  const convertData = (inputData: InputDataItem[] | null | undefined): ConvertedCategory[] => {
    if (!inputData || !Array.isArray(inputData)) {
      console.error('Invalid inputData. Please provide a valid array.');
      return [];
    }
  
    const categoryMapping: Record<string, string> = {
      'Best Practices': 'Performance', 
    };
  
    const result: ConvertedCategory[] = [];
  
    inputData.forEach((item) => {
      const category = categoryMapping[item.category] || 'Other'; 
  
      const existingCategory = result.find((cat) => cat.category === category);
  
      if (existingCategory) {
        existingCategory.data.push({
          id: item.id,
          title: item.title,
          links: [
            {
              url: item.url,
              titleUrl: item.titleurl,
            },
          ],
        });
      } else {
        result.push({
          category: category,
          data: [
            {
              id: item.id,
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
  