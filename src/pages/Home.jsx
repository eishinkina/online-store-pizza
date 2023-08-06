import React from "react";
import { useEffect, useState } from "react";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sort, setSort] = useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [currenPage, setCurrenPage] = useState(1)
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sort.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";
  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://644a82c6a8370fb32150d170.mockapi.io/items?page=${currenPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsloading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currenPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategoryProp={(i) => setCategoryId(i)}
        />
        <Sort sortValue={sort} onClickSortProp={(index) => setSort(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={number => setCurrenPage(number)}/>
    </div>
  );
};

export default Home;
