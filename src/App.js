import Header from "./Layout/Header";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import Slider from "./components/slider/Slider";
import slider2 from "./assets/slider2.jpg";
import NewSlider from "./components/NewSlider";
import ProductsList from "./components/newProducts/ProductsList";
import ProductDetail from "./components/productDetail/ProductDetail";
// import slider1 from "./assets/sliderImages/sliderimg1.jpg";

function App() {
  const sliderData = [
    {
      src: "/sliderImages/sliderimg1.jpg",
      title: "image 1",
      discount: "60",
      header: "Winter Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg2.jpg",
      title: "image 2",
      discount: "80",
      header: "Spring Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg3.jpg",
      title: "image 3",
      discount: "20",
      header: "Autumn Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg4.jpg",
      title: "image 4",
      discount: "80",
      header: "Summer Collection",
      lightText: "The Best of 2022",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          {/* <Route path="/home">
            <Redirect to="/" />
          </Route> */}
          <Route path="/" exact>
            <NewSlider slides={sliderData} />
            <ProductsList />
          </Route>
          <Route path="/product-detail/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
