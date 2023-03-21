import React from "react";
import Button, { ButtonSize, ButtonType } from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const buttonMeta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default buttonMeta;

export const Default: ComponentStory<typeof Button> = () => {
  return <Button>Default Button</Button>;
};

Default.storyName = "默认按钮样式";

export const ButtonWithSize: ComponentStory<typeof Button> = () => {
  return (
    <>
      <Button size={ButtonSize.Large}>large button</Button>
      <Button size={ButtonSize.Small}>small button</Button>
    </>
  );
};

export const ButtonWithType: ComponentStory<typeof Button> = () => {
  return (
    <>
      <Button btnType={ButtonType.Primary}>primary button</Button>
      <Button btnType={ButtonType.Danger}>danger button</Button>
      <Button btnType={ButtonType.Link} href="https://google.com">
        link button
      </Button>
    </>
  );
};
ButtonWithSize.storyName = "不同尺寸的按钮";
ButtonWithType.storyName = "不同类型的按钮";
