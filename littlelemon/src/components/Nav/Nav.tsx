import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import styles from "./Nav.module.css";
const Nav: React.FC = () => {
  return (
    <nav className={`w-9/12`}>
      <ul className={`${styles.container} py-4 font-medium`}>
        <img
          className={`${styles.logo} place-self-center`}
          src={Logo}
          alt="LittleLemon"
        />
        <div className={`${styles.links} grid grid-cols-6 place-items-center`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Menu"}>Menu</Link>
          <Link to={"/Reservations"}>Reservations</Link>
          <Link to={"/Order"}>Order</Link>
          <Link to={"/Login"}>Login</Link>
        </div>
      </ul>
    </nav>
  );
};
export default Nav;
