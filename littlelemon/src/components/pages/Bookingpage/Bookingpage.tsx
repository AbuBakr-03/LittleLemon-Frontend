import Bookingform from "./Bookingform/Bookingform";
import Header from "../../HeaderAndNavbar/Header";

type actiontype = {
  type: "update";
  date: Date;
};

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
type prop = {
  times: string[];
  dispatcher: React.ActionDispatch<[action: actiontype]>;
  submit: (formData: formtype) => boolean;
};
const Bookingpage: React.FC<prop> = ({ times, dispatcher, submit }) => {
  return (
    <>
      <Header></Header>
      <main>
        <Bookingform
          times={times}
          submit={submit}
          dispatcher={dispatcher}
        ></Bookingform>
      </main>
    </>
  );
};
export default Bookingpage;
