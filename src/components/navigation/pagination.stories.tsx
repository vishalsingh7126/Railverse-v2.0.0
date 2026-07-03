import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination } from "./pagination";

const meta = {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 2,
    totalPages: 10,
    onPageChange: () => {},
  },
};
