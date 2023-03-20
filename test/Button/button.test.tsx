import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Button, {
  ButtonProps,
  ButtonSize,
  ButtonType,
} from "../../src/components/Button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "class",
};

describe("button component test case", () => {
  test("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Test</Button>);
    const element = wrapper.getByText("Test");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  test("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Test2</Button>);
    const element = wrapper.getByText("Test2");
    expect(element).toBeInTheDocument();
    console.log(element);
    expect(element).toHaveClass("btn btn-primary btn-lg class");
  });
  it("should render a link tag when btnType === link and href is provided", () => {});
  it("should rednder the disabled button when disabeld is provided", () => {});
});
