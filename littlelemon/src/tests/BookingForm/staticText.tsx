import { render, screen } from "@testing-library/react";
import Reservation from "../../components/pages/Bookingpage/Bookingform/Bookingform";

const mockTimes = [
  { value: "1", label: "01:00 PM" },
  { value: "2", label: "02:00 PM" },
];

const mockDispatcher = jest.fn();

test("renders static text in Bookingform", () => {
  render(<Reservation times={mockTimes} dispatcher={mockDispatcher} />);

  // Check if the heading is rendered
  expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();

  // Check if labels are rendered
  expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Select Occasion:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Select Date:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Select Time:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Comment box:/i)).toBeInTheDocument();

  // Check if the submit button is rendered
  expect(
    screen.getByRole("button", { name: /Reserve a Table/i }),
  ).toBeInTheDocument();
});
