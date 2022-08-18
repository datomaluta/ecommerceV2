import classes from "./Header.module.css";
import cartIcon from "../assets/cart.svg";
import heartIcon from "../assets/heart-outline.svg";
import searchIcon from "../assets/search-outline.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Istore</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
      <div className={classes.actions}>
        <div className={classes.inputWrapper}>
          <input placeholder="Search products" />
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <div className={classes.imgWrapper}>
          <p className={classes.badge}>02</p>
          <img src={heartIcon} alt="heartIcon" />
        </div>
        <div className={classes.imgWrapper}>
          <p className={classes.badge}>02</p>
          <img src={cartIcon} alt="cartIcon" />
        </div>
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
