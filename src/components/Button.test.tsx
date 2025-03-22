import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("renders button with text", () => {
  render(<Button text="Click me" />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
  const onClick = vi.fn();
  render(<Button text="Click me" onClick={onClick} />);

  await userEvent.click(screen.getByText("Click me"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
