import MandA1 from "../../assets/Mario and Adrian A.jpg";
import MandA2 from "../../assets/Mario and Adrian b.jpg";
import styles from "./About.module.css";
const About: React.FC = () => {
  return (
    <article className={`grid justify-items-center py-6 ${styles.bg}`}>
      <div className={`w-9/12 ${styles.container} gap-4`}>
        <div className={`grid gap-2`}>
          <h1 className={`font-markazi text-5xl ${styles.heading}`}>
            Little Lemon
          </h1>
          <h2 className={`font-karla text-xl`}>Chicago</h2>
          <p className={`font-karla`}>
            Adrian and Mario, two passionate brothers with a deep love for
            Mediterranean cuisine, founded Little Lemon to bring authentic
            flavors and warm hospitality to every table. Growing up in a family
            that cherished fresh ingredients and traditional recipes, they
            combined their culinary expertise to craft a menu that celebrates
            the vibrant tastes of the Mediterranean. With a commitment to
            quality, innovation, and a welcoming atmosphere, Adrian and Mario
            ensure that every guest feels like part of the family while savoring
            dishes made with heart and soul.
          </p>
        </div>
        <img className={`${styles.img} rounded-xl`} src={MandA1} alt="" />
        <img className={`${styles.img} rounded-xl`} src={MandA2} alt="" />
      </div>
    </article>
  );
};
export default About;
