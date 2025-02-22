import Specials from "../Specials/Specials";
import Jumbotron from "../Jumbotron/Jumbotron";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
const Main: React.FC = () => {
  return (
    <main>
      <Jumbotron></Jumbotron>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <About></About>
    </main>
  );
};
export default Main;
