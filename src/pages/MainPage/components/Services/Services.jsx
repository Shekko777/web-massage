import './Services.css';

import image1 from "../../../../assets/images/services/1.png";
import image2 from "../../../../assets/images/services/2.png";
import image3 from "../../../../assets/images/services/3.png";
import image4 from "../../../../assets/images/services/4.png";

export default function Services() {
  return (
    <section className="section services" id="price">
      <h2 className="title services__title">Услуги и цены</h2>
      <ul className="services__cards">
        <li className="services__card">
          <img className="services__card-img" src={image1} alt="Картинка" />
          <h3 className="services__card-title">Массажи ног</h3>
        </li>
        <li className="services__card">
          <img className="services__card-img" src={image2} alt="Картинка" />
          <h3 className="services__card-title">Антицеллюлитные</h3>
        </li>
        <li className="services__card">
          <img className="services__card-img" src={image3} alt="Картинка" />
          <h3 className="services__card-title">Грубые массажи</h3>
        </li>
        <li className="services__card">
          <img className="services__card-img" src={image4} alt="Картинка" />
          <h3 className="services__card-title">Только спина</h3>
        </li>
      </ul>
    </section>
  );
}
