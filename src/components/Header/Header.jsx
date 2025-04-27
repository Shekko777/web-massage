import "./Header.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
  function handleScrollToElement(evt) {
    evt.preventDefault();

    const blockID = evt.target.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип кабинета" />
      <p className="header__text">ПН - ПТ (с 10:00 до 19:00)</p>
      <nav className="nav">
        <button className="nav__close-button">Закрыть</button>
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
      </nav>
    </header>
  );
}
