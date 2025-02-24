import styles from "./Footer.module.css";
import Logo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      className={`${styles.bg} grid justify-items-center py-6 text-white`}
    >
      <div className={`grid w-9/12 gap-2 ${styles.container}`}>
        <div className={`${styles.imgcont}`}>
          <img className={`${styles.img}`} src={Logo} alt="" />
        </div>
        <ul className={`${styles.nav}`}>
          <li className={`mb-3 font-markazi text-2xl font-medium`}>
            Navigation
          </li>
          <div className={`grid gap-1 font-karla`}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/About"}>About</Link>
            </li>
            <li>
              <Link to={"/Menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/Reservations"}>Reservations</Link>
            </li>
            <li>
              <Link to={"/Order"}>Order</Link>
            </li>
            <li>
              <Link to={"/Login"}>Login</Link>
            </li>
          </div>
        </ul>
        <ul className={`${styles.address}`}>
          <li className={`mb-3 font-markazi text-2xl font-medium`}>Contact</li>
          <div className={`grid gap-1 font-karla`}>
            <li>Address: 123 Mediterranean Lane, Chicago, IL 60601</li>
            <li>Phone: (312) 555-7890</li>
            <li>Email: contact@littlelemon.com</li>
          </div>
        </ul>
        <ul className={`${styles.social}`}>
          <li className={`mb-3 font-markazi text-2xl font-medium`}>
            Social Media Links
          </li>
          <div className={`grid gap-1 font-karla`}>
            <li>
              <Link to={"/Facebook"}>Facebook</Link>
            </li>
            <li>
              <Link to={"/TikTok"}>TikTok</Link>
            </li>
            <li>
              <Link to={"/Instagram"}>Instagram</Link>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
