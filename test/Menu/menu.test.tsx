import {
  RenderResult,
  cleanup,
  fireEvent,
  render,
} from "@testing-library/react";
import Menu, { MenuProps } from "../../src/components/Menu/index";
import Item from "../../src/components/Menu/Item";
import React from "react";

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical",
};

const TestMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <Item index={0}>active</Item>
      <Item index={1} disabled>
        disabled
      </Item>
      <Item index={2}>default</Item>
      <li></li>
    </Menu>
  );
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem Component", () => {
  beforeEach(() => {
    wrapper = render(TestMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("zx-menu test");
    expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("should change active states and trigger the callbacks when click items", () => {
    const testItem = wrapper.getByText("default");
    fireEvent.click(testItem);
    expect(testItem).toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });
  it("should render the vertical menu when mode is set to vertical", () => {
    cleanup();
    const wrapper = render(TestMenu(testVerProps));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
});
