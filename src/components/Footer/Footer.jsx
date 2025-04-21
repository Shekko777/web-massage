import './Footer.css';
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img" src={logo} alt="Логотип" />
    </footer>
  );
}
