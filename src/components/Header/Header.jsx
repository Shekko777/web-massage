import React from 'react';
import "./Header.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const [navIsActive, setNavIsActive] = React.useState(false);

  function handleActivateNavBar() {
    setNavIsActive(true);
    document.querySelector('.body').classList.add('body_disactive');
  }

  function handleCloseNavBar() {
    setNavIsActive(false);
    document.querySelector('.body').classList.remove('body_disactive');
  }

  function handleScrollToElement(evt) {
    evt.preventDefault();
    const blockID = evt.target.getAttribute("href").substring(1);
    document.getElementById(blockID).scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

    handleCloseNavBar();
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип кабинета" />
      <p className="header__text">ПН - ПТ (с 10:00 до 19:00)</p>
      <button className="header__burger-button" onClick={handleActivateNavBar}></button>
      <nav className={navIsActive ? 'nav nav_active' : 'nav'}>
        <div className="nav__container">
          <button className="nav__close-button" onClick={handleCloseNavBar}></button>
          <ul className="nav__items">
            <li className="nav__item">
              <a
                className="nav__link"
                href="#price"
                onClick={handleScrollToElement}
              >
                Прайслист
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#decor"
                onClick={handleScrollToElement}
              >
                Интерьер
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#contacts"
                onClick={handleScrollToElement}
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
