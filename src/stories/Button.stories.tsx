import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { FaSpotify, FaCalendar } from "react-icons/fa";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "primary", "secondary", "outlined"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    children: { control: "text" },
    icon: { control: "boolean" },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
  },
};
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Default Button",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
};
export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};
export const Icon: Story = {
  args: {
    children: "Default Button",
    icon: <FaSpotify />,
  },
};
export const IconLeft: Story = {
  args: {
    children: "Default Button",
    icon: <FaCalendar />,
    iconPosition: "left",
  },
};
export const IconRight: Story = {
  args: {
    children: "Default Button",
    icon: <FaCalendar />,
    iconPosition: "right",
  },
};
