import { useNavigate } from "react-router-dom";
import pic from "../../../../assets/restauranfood.jpg";
import styles from "./Jumbotron.module.css";
const Jumbotron: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={`grid justify-items-center ${styles.bg}`}>
      <article className={`grid w-9/12 gap-6 py-6 md:grid-cols-2`}>
        <div className="grid gap-2">
          <h1 className={`font-markazi text-5xl font-medium ${styles.heading}`}>
            Little Lemon
          </h1>
          <h2 className={`font-markazi text-2xl font-medium text-white`}>
            Chicago
          </h2>
          <p className={`font-karla text-white`}>
            Little Lemon brings you the vibrant flavors of the Mediterranean
            with fresh, locally sourced ingredients. Our dishes are crafted with
            love, blending tradition and innovation for a truly unforgettable
            dining experience. Step in and savor the zest of life, one bite at a
            time!
          </p>
          <div className={`grid justify-start`}>
            <button
              onClick={() => {
                navigate("/Reservations");
              }}
              className={`${styles.buttonbg} my-1 rounded-xl border-2 px-4 py-1 font-markazi text-xl transition-all duration-300 hover:bg-white`}
            >
              Reserve a Table
            </button>{" "}
          </div>
        </div>
        <div className={`grid place-items-center`}>
          <img
            className={`aspect-square w-full rounded-xl object-cover md:aspect-video`}
            src={pic}
            alt=""
          />
        </div>
      </article>
    </div>
  );
};
export default Jumbotron;
