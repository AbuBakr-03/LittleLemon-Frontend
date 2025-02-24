import styles from "./Reviews.module.css";
import star from "../../../../../assets/star.png";
type propTypes = {
  avatar: string;
  name: string;
  rating: string;
  description: string;
};
const Reviews: React.FC<propTypes> = ({
  avatar,
  name,
  rating,
  description,
}) => {
  return (
    <div
      className={`bg-white ${styles.testimonial} place-items-center gap-3 rounded-xl p-4 shadow`}
    >
      <img
        className={`${styles.img} w-1/2 place-self-center object-cover`}
        src={avatar}
        alt="avatar"
      />
      <p className={`${styles.name} place-self-center font-markazi text-2xl`}>
        {name}
      </p>
      <div
        className={`${styles.rating} place-items-center gap-2 place-self-center`}
      >
        <p className={`${styles.number} font-markazi text-2xl`}>{rating}</p>
        <img
          className={`${styles.star} max-w-5 object-cover`}
          src={star}
          alt="star"
        />
      </div>
      <p
        className={`${styles.review} h-16 place-self-center font-karla md:h-32`}
      >
        {description}
      </p>
    </div>
  );
};
export default Reviews;
