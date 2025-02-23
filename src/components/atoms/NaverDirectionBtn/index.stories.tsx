import React from "react";
import NaverDirectionBtn from "@/components/atoms/NaverDirectionBtn/index";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Example/NaverDirectionBtn",
  component: NaverDirectionBtn,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) => <NaverDirectionBtn {...args} />;

export const Default = Template.bind({});
Default.args = {};
