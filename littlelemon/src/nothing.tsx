import { useState } from "react";
import styles from "./Bookingform.module.css";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  dispatcher: React.ActionDispatch<[action: actiontype]>;
  submit: (formData: formtype) => boolean;
};

const Reservation: React.FC<propstype> = ({ times, dispatcher, submit }) => {
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().min(7),
    diners: z.number().min(1).max(10),
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
  } = useForm<formTypes>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    diners: 1,
    occasion: "1",
    date: "",
    time: "1",
    comment: "",
  });

  const listofTimes = times.map((x, index) => {
    return (
      <option key={index} value={x}>
        {x}
      </option>
    );
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    if (e.target.name === "date") {
      dispatcher({ type: "update", date: new Date(e.target.value) });
    }
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const increment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (formData.diners < 10) {
      setFormData((c) => ({ ...c, diners: c.diners + 1 }));
    }
  };

  const decrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (formData.diners > 1) {
      setFormData((c) => ({ ...c, diners: c.diners - 1 }));
    }
  };

  const navigate = useNavigate();

  const submiter: SubmitHandler<formTypes> = (data) => {
    console.log("submiter is running!", data); // This must log
    if (submit(data)) {
      console.log("Navigation should happen now...");
      navigate("/Reservations/Success");
    } else {
      console.log("Submit function returned false, navigation blocked.");
    }
  };

  return (
    <>
      <article className={`grid justify-items-center`}>
        <div className={`grid w-9/12 justify-items-center lg:w-6/12`}>
          <form
            className={`m-6 grid w-10/12 gap-4 rounded-lg border border-slate-200 p-6 shadow`}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form is being submitted!"); // Should log
              console.log("Validation Errors:", errors); // Check if errors exist

              handleSubmit(submiter)(e);
            }}
          >
            <h1 className={`font-markazi text-3xl`}>Reserve a Table</h1>
            <div className={`grid gap-1 font-markazi text-lg`}>
              <label htmlFor="name">Name:</label>
              <input
                value={formData.name}
                className={`rounded border-2 border-slate-200 pl-2`}
                type="text"
                id="name"
                {...register("name")}
                onChange={(e) => {
                  register("name").onChange(e); // Ensure React Hook Form updates its state
                  handleChange(e); // Your custom function that tracks e.target.name
                }}
              />
              {errors.name && (
                <p className="text-red-600">Enter a valid name.</p>
              )}
              <label htmlFor="email">Email:</label>
              <input
                className={`rounded border-2 border-slate-200 pl-2`}
                type="email"
                id="email"
                {...register("email")}
                onChange={(e) => {
                  register("email").onChange(e);
                  handleChange(e);
                }}
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-600">Enter a valid Email.</p>
              )}
              <label htmlFor="phone">Phone:</label>
              <input
                {...register("phone")}
                onChange={(e) => {
                  register("phone").onChange(e);
                  handleChange(e);
                }}
                value={formData.phone}
                className={`rounded border-2 border-slate-200 pl-2`}
                type="tel"
                name="phone"
                id="phone"
              />
              {errors.phone && (
                <p className="text-red-600">Enter a valid phone number.</p>
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
                  {formData.diners}
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
              <label htmlFor="occasion">Select Occasion:</label>
              <select
                {...register("occasion")}
                onChange={(e) => {
                  register("occasion").onChange(e);
                  handleChange(e);
                }}
                value={formData.occasion}
                name="occasion"
                id="ocassion"
                className="rounded border-2 border-slate-200 py-1 pl-2"
              >
                <option value="1">Birthday</option>
                <option value="2">Anniversary</option>
                <option value="3">Engagement</option>
              </select>
              {errors.occasion && (
                <p className="text-red-600">Choose an occasion.</p>
              )}
              <div className={`${styles.select} my-1`}>
                <label className={`${styles.select1}`} htmlFor="date">
                  Select Date:
                </label>
                <input
                  {...register("date")}
                  onChange={(e) => {
                    register("date").onChange(e);
                    handleChange(e);
                  }}
                  type="date"
                  className={`${styles.date} rounded border-2 border-slate-200 px-1 pl-2`}
                  name="date"
                  id="date"
                  value={formData.date}
                ></input>
                {errors.date && (
                  <p className="text-red-600">Choose a valid date.</p>
                )}
                <label className={`${styles.select2}`} htmlFor="time">
                  Select Time:
                </label>
                <select
                  {...register("time")}
                  onChange={(e) => {
                    register("time").onChange(e);
                    handleChange(e);
                  }}
                  className={`${styles.time} rounded border-2 border-slate-200 px-1 pl-2`}
                  name="time"
                  id="time"
                  value={formData.time}
                >
                  {listofTimes}
                </select>
                {errors.time && (
                  <p className="text-red-600">Choose an available time.</p>
                )}
              </div>
              <label htmlFor="comment">Comment box:</label>
              <textarea
                value={formData.comment}
                className={`rounded border-2 border-slate-200 pl-2`}
                id="comment"
                cols={30}
                rows={5}
                {...register("comment")}
                onChange={(e) => {
                  register("comment").onChange(e);
                  handleChange(e);
                }}
              ></textarea>
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
