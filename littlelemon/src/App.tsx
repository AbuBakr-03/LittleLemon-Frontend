import "./App.css";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/pages/Homepage/Homepage";
import Bookingpage from "./components/pages/Bookingpage/Bookingpage";
import Success from "./components/pages/Bookingpage/ConfirmedBooking/Success";
function App() {
  type formtype = {
    name: string;
    email: string;
    phone: string;
    diners: number;
    occasion: string;
    date: string;
    time: string;
    comment: string;
  };
  const submitAPI = function (formData: formtype) {
    console.log(formData);
    return true;
  };
  const seededRandom = function (seed: number) {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  const fetchAPI = function (date: Date): string[] {
    const result = [];
    const random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const initialTimes = fetchAPI(new Date());

  type actiontype = {
    type: "update";
    date: Date;
  };
  const updateState = (state: string[], action: actiontype) => {
    switch (action.type) {
      case "update":
        return fetchAPI(new Date(action.date));
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateState, initialTimes);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/Reservations">
          <Route
            index
            element={
              <Bookingpage
                submit={submitAPI}
                times={availableTimes}
                dispatcher={dispatch}
              ></Bookingpage>
            }
          ></Route>
          <Route path="Success" element={<Success></Success>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
