import { Fragment, useState } from "react";
import classes from "./NewSlider.module.css";
import NextIcon from "../assets/NextIcon";
import PreviousIcon from "../assets/PreviousIcon";

const NewSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlideHandler = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  const prevSlideHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  const { slides } = props;

  return (
    <div className={classes.slider}>
      <button onClick={prevSlideHandler} className={classes.prevButton}>
        <PreviousIcon />
      </button>
      <button onClick={nextSlideHandler} className={classes.nextButton}>
        <NextIcon />
      </button>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={
            index === currentIndex
              ? `${classes.slide} ${classes.active}`
              : classes.slide
          }
        >
          {currentIndex === index && (
            <Fragment>
              <div className={classes.imgWrapper}>
                <img src={slide.src} />
              </div>
              <div className={classes.text}>
                <p>{slide.discount}% Discount</p>
                <h1>{slide.header}</h1>
                <p>{slide.lightText}</p>
                <a href="/" className={classes.goShop}>
                  Shop Now
                </a>
              </div>
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
};
export default NewSlider;
