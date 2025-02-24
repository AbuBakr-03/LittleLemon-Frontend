import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Bookingform.module.css";

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

type propstype = {
  times: string[];
  dispatcher: React.Dispatch<actiontype>;
  submit: (formData: formtype) => boolean;
};

const Reservation: React.FC<propstype> = ({ times, dispatcher, submit }) => {
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().min(7),
    diners: z.coerce.number().min(1).max(10),
    occasion: z.string(),
    date: z.string(),
    time: z.string(),
    comment: z.string().max(300),
  });

  type formTypes = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<formTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      diners: 1,
      occasion: "1",
      date: "",
      time: "1",
      comment: "",
    },
  });

  const navigate = useNavigate();
  const diners = watch("diners");

  const submiter: SubmitHandler<formTypes> = (data) => {
    console.log("submiter is running!", data);
    if (submit(data)) {
      console.log("Navigation should happen now...");
      navigate("/Reservations/Success");
    } else {
      console.log("Submit function returned false, navigation blocked.");
    }
  };

  return (
    <>
      <article className="grid justify-items-center">
        <div className="grid w-9/12 justify-items-center lg:w-6/12">
          <form
            className="m-6 grid w-10/12 gap-4 rounded-lg border border-slate-200 p-6 shadow"
            onSubmit={handleSubmit(submiter)}
          >
            <h1 className="font-markazi text-3xl">Reserve a Table</h1>
            <div className="grid gap-1 font-markazi text-lg">
              <label htmlFor="name">Name:</label>
              <input
                className="rounded border-2 border-slate-200 pl-2"
                type="text"
                id="name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-600">Enter a valid name.</p>
              )}

              <label htmlFor="email">Email:</label>
              <input
                className="rounded border-2 border-slate-200 pl-2"
                type="email"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-600">Enter a valid Email.</p>
              )}

              <label htmlFor="phone">Phone:</label>
              <input
                className="rounded border-2 border-slate-200 pl-2"
                type="tel"
                id="phone"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-600">Enter a valid phone number.</p>
              )}

              <p>Number of Diners:</p>
              <div className="grid w-1/2 grid-cols-3 justify-items-center justify-self-center rounded py-1">
                <button
                  type="button"
                  onClick={() => setValue("diners", Math.max(1, diners - 1))}
                  className="w-full border border-slate-300 bg-slate-200 text-xl font-bold"
                >
                  -
                </button>
                <p className="w-full border border-slate-200 bg-slate-100 text-center text-xl font-medium">
                  {diners}
                </p>
                <button
                  type="button"
                  onClick={() => setValue("diners", Math.min(10, diners + 1))}
                  className="w-full border border-slate-300 bg-slate-200 text-xl font-bold"
                >
                  +
                </button>
              </div>

              <label htmlFor="occasion">Select Occasion:</label>
              <select
                className="rounded border-2 border-slate-200 py-1 pl-2"
                {...register("occasion")}
              >
                <option value="1">Birthday</option>
                <option value="2">Anniversary</option>
                <option value="3">Engagement</option>
              </select>

              <label htmlFor="date">Select Date:</label>
              <input
                type="date"
                className="rounded border-2 border-slate-200 px-1 pl-2"
                {...register("date", {
                  onChange: (e) =>
                    dispatcher({
                      type: "update",
                      date: new Date(e.target.value),
                    }),
                })}
              />
              {errors.date && (
                <p className="text-red-600">Choose a valid date.</p>
              )}

              <label htmlFor="time">Select Time:</label>
              <select
                className="rounded border-2 border-slate-200 px-1 pl-2"
                {...register("time")}
              >
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <label htmlFor="comment">Comment box:</label>
              <textarea
                className="rounded border-2 border-slate-200 pl-2"
                {...register("comment")}
                cols={30}
                rows={5}
              ></textarea>

              <div className="my-2 grid place-self-center">
                <button
                  type="submit"
                  className={`${styles.buttonbg} my-1 rounded-xl border-2 px-4 py-1 font-markazi text-xl transition-all duration-300 hover:bg-white`}
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          </form>
        </div>
      </article>
    </>
  );
};

export default Reservation;
