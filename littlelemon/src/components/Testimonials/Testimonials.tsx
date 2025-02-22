import styles from "./Testimonials.module.css";
import avatar from "../../assets/Default_pfp.svg.webp";
import Reviews from "../Reviews/Review";
const Testimonials: React.FC = () => {
  return (
    <article className={`grid justify-items-center ${styles.bg}`}>
      <div className={`grid w-9/12 place-items-center gap-4 py-6`}>
        <h1 className={`font-markazi text-3xl font-medium`}>Testimonials</h1>
        <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4`}>
          <Reviews
            avatar={avatar}
            name="John"
            rating="4.5"
            description="Little Lemon never disappoints! Their homemade hummus and pita is the
        best I’ve had."
          ></Reviews>
          <Reviews
            avatar={avatar}
            name="Omar"
            rating="5"
            description="Whether you're dining in or taking out, this place is a must-visit for Mediterranean cuisine lovers. Can’t wait to return!"
          ></Reviews>
          <Reviews
            avatar={avatar}
            name="Zack"
            rating="4"
            description="The ambiance is lovely, perfect for a date night or family dinner. My only complaint is that the service was a bit slow during peak hours."
          ></Reviews>
          <Reviews
            avatar={avatar}
            name="Clive"
            rating="4.5"
            description="The food at Little Lemon is fantastic! I had the seafood risotto, and it was creamy, rich, and full of fresh ingredients."
          ></Reviews>
        </div>
      </div>
    </article>
  );
};
export default Testimonials;
