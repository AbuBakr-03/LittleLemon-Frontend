import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/pages/Homepage/Main";
import Reservation from "./components/pages/Bookingpage/Bookingform";
import Success from "./components/Success/Success";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Reservations">
          <Route index element={<Reservation></Reservation>}></Route>
          <Route path="Success" element={<Success></Success>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
