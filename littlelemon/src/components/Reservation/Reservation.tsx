import Button from "../Button/Button";
import styles from "./Reservation.module.css";
const Reservation: React.FC = () => {
  return (
    <article className={`grid justify-items-center`}>
      <div className={`grid w-9/12 justify-items-center lg:w-6/12`}>
        <form
          className={`m-6 grid w-10/12 gap-4 rounded-lg border border-slate-200 p-6 shadow`}
          action=""
        >
          <h1 className={`font-markazi text-3xl`}>Reserve a Table</h1>
          <div className={`font-markazi grid gap-1 text-lg`}>
            <label htmlFor="name">Name:</label>
            <input
              className={`rounded border-2 border-slate-200`}
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="phone">Phone:</label>
            <input
              className={`rounded border-2 border-slate-200`}
              type="tel"
              name="phone"
              id="phone"
            />
            <div className={`${styles.select} my-1`}>
              <label className={`${styles.select1}`} htmlFor="date">
                Select Date:
              </label>
              <input
                type="date"
                className={`${styles.date} rounded border-2 border-slate-200 px-1`}
                name="date"
                id="date"
              ></input>
              <label className={`${styles.select2}`} htmlFor="time">
                Select Time:
              </label>
              <select
                className={`${styles.time} rounded border-2 border-slate-200 px-1`}
                name="time"
                id="time"
              >
                <option value="1">01:00 PM</option>
                <option value="2">02:00 PM</option>{" "}
                <option value="3">03:00 PM</option>{" "}
                <option value="4">04:00 PM</option>{" "}
                <option value="5">05:00 PM</option>{" "}
                <option value="6">06:00 PM</option>{" "}
                <option value="7">07:00 PM</option>{" "}
                <option value="8">08:00 PM</option>
              </select>
            </div>
            <label htmlFor="comment">Comment box:</label>
            <textarea
              className={`rounded border-2 border-slate-200`}
              name="comment"
              id="comment"
              cols="30"
              rows="5"
            ></textarea>
            <div className="my-2 grid place-items-center">
              {" "}
              <Button text="Reserve Table"></Button>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
};
export default Reservation;
