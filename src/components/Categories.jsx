import React from "react";

const Categories = ({ value, onClickCategoryProp }) => {

  const categoryes = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categoryes.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategoryProp(i)}
              className={value === i ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
