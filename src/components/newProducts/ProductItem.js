import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <Link className={classes.link} to={`/product-detail/${props.id}`}>
      <div className={classes.productCard}>
        <div className={classes.imageWrapper}>
          <img src={props.src} />
        </div>
        <div className={classes.info}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.price}>${props.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
