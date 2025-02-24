import React, { createContext, useContext, useState } from "react";

type datacontexttype = {
  formData: formtype;
  availableTimes: timetype[];
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  increment: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  decrement: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
type timetype = {
  value: string;
  label: string;
};
type proptype = {
  children: React.ReactNode;
};
export const datacontext = createContext<datacontexttype | undefined>(
  undefined,
);

const Bookingcontext = ({ children }: proptype) => {
  const [formData, setFormData] = useState<formtype>({
    name: "",
    email: "",
    phone: "",
    diners: 1,
    occasion: "1",
    date: "",
    time: "1",
    comment: "",
  });
  const [availableTimes] = useState<timetype[]>([
    { value: "1", label: "01:00 PM" },
    { value: "2", label: "02:00 PM" },
    { value: "3", label: "03:00 PM" },
    { value: "4", label: "04:00 PM" },
    { value: "5", label: "05:00 PM" },
    { value: "6", label: "06:00 PM" },
    { value: "7", label: "07:00 PM" },
    { value: "8", label: "08:00 PM" },
  ]);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
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
  return (
    <datacontext.Provider
      value={{ availableTimes, handleChange, increment, decrement, formData }}
    >
      {children}
    </datacontext.Provider>
  );
};
export default Bookingcontext;

export const useBooking = () => {
  return useContext(datacontext);
};
