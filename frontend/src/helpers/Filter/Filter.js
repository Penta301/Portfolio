import FilterLogic from "./FilterLogic";
import SpecialButton from "../../components/SpecialButton/SpecialButton";
import "./index.css";

import { Button } from "semantic-ui-react";
import { useState } from "react";

function Filter({ data }) {
  const [filterData, setFilterData] = useState(data);
  const { cleanData, filterCategories } = FilterLogic();
  const newItems = (data, filter, setter, type) => {
    const newData = filter(data, type);
    setter(newData);
  };

  const newData = cleanData(data);

  return (
    <div>
      <div className="buttons-filter-container">
        <Button
          basic={true}
          color="blue"
          inverted={true}
          onClick={() => setFilterData(data)}
        >
          All
        </Button>
        {newData.map((category, index) => {
          return (
            <Button
              onClick={() =>
                newItems(data, filterCategories, setFilterData, category)
              }
              basic={true}
              color="blue"
              inverted={true}
              key={index}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <div className="content-filter-container">
        {filterData.map((item) => {
          const { title, link } = item;
          return (
            <SpecialButton
              link={link}
              color="blue"
              title={title}
              secondaryTitle="GO"
              icon="fork"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
