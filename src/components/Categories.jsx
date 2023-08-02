import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const category = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onclickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {category.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onclickCategory(i)}
              className={activeIndex === i ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
