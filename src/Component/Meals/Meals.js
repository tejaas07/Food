import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummery from "./MealsSummery";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummery />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
