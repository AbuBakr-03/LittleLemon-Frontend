import Header from "../../HeaderAndNavbar/Header";
import img from "../../../assets/Mario and Adrian A.jpg";
const About: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main className={`grid justify-items-center`}>
        <div
          className={`my-12 grid w-9/12 place-items-center gap-8 rounded-xl border-2 border-slate-300 px-6 py-4 lg:h-96 lg:grid-cols-2`}
        >
          <div className={`grid gap-4`}>
            <h1 className={`font-markazi text-5xl`}>About us</h1>
            <p className={`font-karla`}>
              Welcome to Little Lemon, where fresh flavors, warm hospitality,
              and a passion for great food come together. Rooted in
              Mediterranean traditions with a modern twist, we take pride in
              crafting dishes that celebrate the vibrant tastes of the region.
              At Little Lemon, we believe in using the finest
              ingredients—locally sourced produce, premium spices, and authentic
              recipes—to create meals that are both wholesome and delicious.
              Whether you're here for a cozy dinner, a casual lunch, or a
              special gathering, our inviting atmosphere and dedicated team
              ensure a memorable dining experience. Join us and savor the zest
              of Mediterranean cuisine, one bite at a time.
            </p>
          </div>
          <img
            className={`aspect-video w-full rounded-xl object-cover`}
            src={img}
            alt=""
          />
        </div>
      </main>
    </>
  );
};

export default About;
