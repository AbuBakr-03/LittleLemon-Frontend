import { useEffect, useRef, useState, RefObject } from "react";
import Logo from "../../../assets/Logo.svg";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav: React.FC = () => {
  const [mobile, setmobile] = useState<boolean>(false);
  const [menu, setmenu] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handlemenu = () => {
    setmenu(true);
  };
  const handleClickOutside = () => {
    setmenu(false);
  };
  useOnClickOutside(ref as RefObject<HTMLElement>, handleClickOutside);

  const checksize = () => {
    if (window.innerWidth < 768) {
      setmobile(true);
    }
    if (window.innerWidth > 768) {
      setmobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobile(true);
    }
    if (window.innerWidth > 768) {
      setmobile(false);
    }
    window.addEventListener("resize", () => {
      checksize();
    });
    return () => {
      window.removeEventListener("resize", () => {
        checksize();
      });
    };
  }, []);

  return (
    <>
      {mobile ? (
        <>
          <nav className="fixed left-0 top-0 z-50 grid w-full grid-cols-3 items-center bg-white px-4 py-2 shadow-md">
            <div className="grid justify-start">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Menu
                  className={`cursor-pointer`}
                  onClick={() => {
                    handlemenu();
                  }}
                ></Menu>
              </motion.div>
            </div>
            <div className="grid justify-center">
              <img
                onClick={() => {
                  navigate("/");
                }}
                className={`h-12 cursor-pointer`}
                src={Logo}
                alt="Little Lemon"
              />
            </div>
          </nav>
          <AnimatePresence initial={false} onExitComplete={() => null}>
            {menu && (
              <>
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", duration: 0.5 }}
                  ref={ref}
                  className="fixed left-0 top-0 z-50 h-full w-4/5 max-w-xs bg-white shadow-lg"
                >
                  <div className="flex items-center justify-between border-b p-4">
                    <p className="pl-2 font-markazi text-3xl font-medium">
                      Menu
                    </p>
                    <button onClick={() => handleClickOutside()}>
                      <X size={28} />
                    </button>
                  </div>
                  <ul className="grid gap-2 p-4 font-markazi text-2xl">
                    <li
                      className={`rounded border-b-2 pl-2 transition-all duration-300 hover:bg-slate-200`}
                    >
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li
                      className={`rounded border-b-2 pl-2 transition-all duration-300 hover:bg-slate-200`}
                    >
                      <Link to={"/About"}>About</Link>
                    </li>
                    <li
                      className={`rounded border-b-2 pl-2 transition-all duration-300 hover:bg-slate-200`}
                    >
                      <Link to={"/Menu"}>Menu</Link>
                    </li>
                    <li
                      className={`rounded border-b-2 pl-2 transition-all duration-300 hover:bg-slate-200`}
                    >
                      <Link to={"/Reservations"}>Reservations</Link>
                    </li>
                    <li
                      className={`rounded border-b-2 pl-2 transition-all duration-300 hover:bg-slate-200`}
                    >
                      <Link to={"/Order"}>Order</Link>
                    </li>
                    <li
                      className={`rounded border-b-2 pl-2 transition-all duration-300 hover:bg-slate-200`}
                    >
                      <Link to={"/Login"}>Login</Link>
                    </li>
                  </ul>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          <div className="mb-16"></div>
        </>
      ) : (
        <>
          <nav className={`w-9/12 font-markazi text-lg font-semibold`}>
            <ul className={`${styles.container} py-4 font-medium`}>
              <img
                onClick={() => {
                  navigate("/");
                }}
                className={`${styles.logo} place-self-center`}
                src={Logo}
                alt="LittleLemon"
              />

              <div
                className={`${styles.links} grid grid-cols-6 place-items-center`}
              >
                <li
                  className={`border-b-2 border-transparent transition-all duration-300 hover:border-black`}
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  className={`border-b-2 border-transparent transition-all duration-300 hover:border-black`}
                >
                  <Link to={"/About"}>About</Link>
                </li>
                <li
                  className={`border-b-2 border-transparent transition-all duration-300 hover:border-black`}
                >
                  <Link to={"/Menu"}>Menu</Link>
                </li>
                <li
                  className={`border-b-2 border-transparent transition-all duration-300 hover:border-black`}
                >
                  <Link to={"/Reservations"}>Reservations</Link>
                </li>
                <li
                  className={`border-b-2 border-transparent transition-all duration-300 hover:border-black`}
                >
                  <Link to={"/Order"}>Order</Link>
                </li>
                <li
                  className={`border-b-2 border-transparent transition-all duration-300 hover:border-black`}
                >
                  <Link to={"/Login"}>Login</Link>
                </li>
              </div>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};
export default Nav;
