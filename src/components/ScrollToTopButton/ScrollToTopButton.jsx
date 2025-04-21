import React from "react";
import './ScrollToTopButton.css';
import arrowToTopImage from "../../assets/images/arrow_top.png";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = React.useState(false);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToELement() {
    window.pageYOffset > window.innerHeight / 2
      ? setShowButton(true)
      : setShowButton(false);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollToELement);

    return () => {
      window.removeEventListener("scroll", handleScrollToELement);
    };
  }, []);

  return (
    <button
      className={showButton ? "top-button top-button_active" : "top-button"}
      onClick={handleScrollToTop}
    >
      <img
        className="top-button__image"
        src={arrowToTopImage}
        alt="Наверх страницы"
      />
    </button>
  );
}
