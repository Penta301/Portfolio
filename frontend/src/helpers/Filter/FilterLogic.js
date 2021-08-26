function FilterLogic() {
  const cleanData = (data) => {
    const list = [];
    const filteredData = data.map((item) => {
      item.technologies.map((type) => list.push(type));
      return list;
    });

    const cleanedData = [...new Set(...filteredData)];

    return cleanedData;
  };

  const filterCategories = (data, category) => {
    const newItems = data.filter((item) =>
      item.technologies.includes(category)
    );
    return newItems;
  };

  return {
    cleanData,
    filterCategories,
  };
}

export default FilterLogic;
