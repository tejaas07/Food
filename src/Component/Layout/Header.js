import { Fragment } from "react";
import classes from "../../Stylesheets/Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
