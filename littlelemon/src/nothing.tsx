import { useState } from "react";
import styles from "./Bookingform.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
const Reservation: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const navigate = useNavigate();
  const increment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCount((c) => c + 1);
  };
  const decrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (count > 1) {
      setCount((c) => c - 1);
    }
  };
  const schema = z.object({
    Name: z.string().min(4),
    Phone: z.string().min(4),
    Email: z.string().email(),
    Date: z.coerce.date().refine(
      (val) => !isNaN(val.getTime()), // Ensure it's a valid date
      {
        message: "Invalid date",
      },
    ),
    Comment: z.string().max(300),
    Time: z.string(),
  });
  type FormType = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormType> = () => {
    navigate("/Reservations/Success");
  };
  return (
    <>
      <article className={`grid justify-items-center`}>
        <div className={`grid w-9/12 justify-items-center lg:w-6/12`}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`m-6 grid w-10/12 gap-4 rounded-lg border border-slate-200 p-6 shadow`}
            action=""
          >
            <h1 className={`font-markazi text-3xl`}>Reserve a Table</h1>
            <div className={`grid gap-1 font-markazi text-lg`}>
              <label htmlFor="Name">Name:</label>
              <input
                {...register("Name")}
                className={`rounded border-2 border-slate-200 pl-2`}
                type="text"
                name="Name"
                id="name"
              />
              {errors.Name && (
                <p className="text-red-600">{errors.Name.message}</p>
              )}
              <label htmlFor="Email">Email:</label>
              <input
                {...register("Email")}
                className={`rounded border-2 border-slate-200 pl-2`}
                type="email"
                name="Email"
                id="Email"
              />
              {errors.Email && (
                <p className="text-red-600">{errors.Email.message}</p>
              )}
              <label htmlFor="Phone">Phone:</label>
              <input
                {...register("Phone")}
                className={`rounded border-2 border-slate-200 pl-2`}
                type="tel"
                name="Phone"
                id="phone"
              />
              {errors.Phone && (
                <p className="text-red-600">Enter Valid Phone Number</p>
              )}
              <p>Number of Diners:</p>
              <div
                className={`grid w-1/2 grid-cols-3 justify-items-center justify-self-center rounded py-1`}
              >
                <button
                  onClick={(e) => {
                    decrement(e);
                  }}
                  className={`w-full border border-slate-300 bg-slate-200 text-xl font-bold`}
                >
                  -
                </button>
                <p
                  className={`w-full border border-slate-200 bg-slate-100 text-center text-xl font-medium`}
                >
                  {count}
                </p>
                <button
                  onClick={(e) => {
                    increment(e);
                  }}
                  className={`w-full border border-slate-300 bg-slate-200 text-xl font-bold`}
                >
                  +
                </button>
              </div>
              <div className={`${styles.select} my-1`}>
                <label className={`${styles.select1}`} htmlFor="Date">
                  Select Date:
                </label>
                <input
                  {...register("Date")}
                  type="date"
                  className={`${styles.date} rounded border-2 border-slate-200 px-1`}
                  name="Date"
                  id="date"
                ></input>

                <label className={`${styles.select2}`} htmlFor="Time">
                  Select Time:
                </label>
                <select
                  {...register("Time")}
                  className={`${styles.time} rounded border-2 border-slate-200 px-1`}
                  name="Time"
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
                {...register("Comment")}
                className={`rounded border-2 border-slate-200 pl-2`}
                name="comment"
                id="comment"
              ></textarea>
              {errors.Comment && <p>{errors.Comment.message}</p>}
              <div className="my-2 grid place-self-center">
                {" "}
                <button
                  type="submit"
                  className={`${styles.buttonbg} my-1 rounded-xl border-2 px-4 py-1 font-markazi text-xl transition-all duration-300 hover:bg-white`}
                >
                  Reserve a Table
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
      </article>
    </>
  );
};
export default Reservation;
