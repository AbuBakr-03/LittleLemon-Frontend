import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Reservation from "./components/Reservation/Reservation";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          path="/Reservations"
          element={<Reservation></Reservation>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
