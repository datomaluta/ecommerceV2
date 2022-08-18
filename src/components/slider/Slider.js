import { useState } from "react";
import classes from "./Slider.module.css";
import NextIcon from "../../assets/NextIcon";
import PreviousIcon from "../../assets/PreviousIcon";
import Dot from "../../assets/Dot";

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [dotClasses, setDotClasses] = useState(`${classes.dot}`);
  const [isActive, setIsActive] = useState();
  const { slides } = props;
  // console.log(slides[0].url);
  console.log(currentIndex);

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  console.log(slideStyle);
  const slideClasses = `${classes.slide} ${classes.active}`;
  console.log(slideClasses);

  const nextImageHandler = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevImageHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // let dotClasses = `${classes.dot}`;

  const dotHanlder = (index, event) => {
    console.log(index);
    setCurrentIndex(index);
    // setDotClasses(`${classes.dot}`);
  };

  return (
    <div className={classes.slider}>
      <div style={slideStyle} className={classes.slide}>
        <div className={classes.futliar}></div>
        <div className={classes.text}>
          <p>{slides[currentIndex].discount}% Discount</p>
          <h1>{slides[currentIndex].header}</h1>
          <p>{slides[currentIndex].lightText}</p>
          <a href="/" className={classes.goShop}>
            Shop Now
          </a>
        </div>
      </div>
      <button onClick={prevImageHandler} className={classes.prevButton}>
        <span>
          <PreviousIcon />
        </span>
      </button>
      <button onClick={nextImageHandler} className={classes.nextButton}>
        <span>
          <NextIcon />
        </span>
      </button>
      <div className={classes.dots}>
        {slides.map((slide, index) => (
          <div
            className={
              index === currentIndex
                ? `${classes.dot} ${classes.activeDot}`
                : classes.dot
            }
            id={index}
            key={index}
            onClick={() => {
              dotHanlder(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
