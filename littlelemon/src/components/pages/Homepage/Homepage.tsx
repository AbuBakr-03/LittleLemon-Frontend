import Specials from "./Specials/Specials";
import Jumbotron from "./Jumbotron/Jumbotron";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";
import Header from "../../HeaderAndNavbar/Header";
const Main: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Jumbotron></Jumbotron>
        <Specials></Specials>
        <Testimonials></Testimonials>
        <About></About>
      </main>
    </>
  );
};
export default Main;
