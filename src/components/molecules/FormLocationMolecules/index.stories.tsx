import RentLocationMolecules, { FormLocationMoleculesProps } from "./index";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "molecules/RentLocationMolecules",
  component: RentLocationMolecules,
} as Meta;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Template: StoryFn = (args: FormLocationMoleculesProps) => <RentLocationMolecules {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: "", // 필수 프로퍼티들을 제공하도록 수정
  storeName: "",
  label: "",
};
