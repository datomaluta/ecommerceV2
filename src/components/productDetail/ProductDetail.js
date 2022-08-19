import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";

const DummyProducts = [
  {
    id: "p1",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    title: "Buttons tweed blazer",
    price: "59.99",
  },
  {
    id: "p2",
    src: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Flowt tweed Skirt",
    price: "68.99",
  },
  {
    id: "p3",
    src: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    title: "Cotton T-shit",
    price: "99.99",
  },
];

const ProductDetail = () => {
  const params = useParams();
  const { productId } = params;
  console.log(productId);
  const product = DummyProducts.find((product) => product.id === productId);
  console.log(product);

  return (
    <section>
      {/* <h1>This is product detail page</h1>
      <h1>{params.productId}</h1> */}
      <div className={classes.detailWrapper}>
        <div className={classes.imgWrapper}>
          <img src={product.src} />
        </div>
        <div className={classes.leftside}>
          <h1>{product.title}</h1>
          <h2>Price: ${product.price}</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <a href="/">Add to cart</a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
