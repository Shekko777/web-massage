import './Decor.css';

import decorImage1 from '../../../../assets/images/decor/1.png';
import decorImage2 from '../../../../assets/images/decor/2.png';
import decorImage3 from '../../../../assets/images/decor/3.png';
import decorImage4 from '../../../../assets/images/decor/4.png';

export default function Decor() {
  return (
    <section className="decor section" id="decor">
      <h2 className="decor__title title">Наш интерьер</h2>
      <ul className="decor__items">
        <li className="decor__item">
          <img
            className="decor__image"
            src={decorImage1}
            alt="Обстановка в кабинете"
          />
        </li>
        <li className="decor__item decor__item_type_wide">
          <img
            className="decor__image"
            src={decorImage2}
            alt="Обстановка в кабинете"
          />
        </li>
        <li className="decor__item decor__item_type_wide">
          <img
            className="decor__image"
            src={decorImage3}
            alt="Обстановка в кабинете"
          />
        </li>
        <li className="decor__item">
          <img
            className="decor__image"
            src={decorImage4}
            alt="Обстановка в кабинете"
          />
        </li>
      </ul>
    </section>
  );
}
