import {
  MdOutlineFormatAlignLeft,
  MdOutlineFormatAlignCenter,
  MdOutlineFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
} from "react-icons/md"

interface SelectedData {
  name: string
  icon: JSX.Element
}

export interface bgColor {
  name: string
  hex: string
}

export const bgColors: bgColor[] = [
  {
    name: "red",
    hex: "red.500",
  },
  {
    name: "green",
    hex: "green.400",
  },
  {
    name: "blue",
    hex: "blue.400",
  },
  {
    name: "purple",
    hex: "purple.400",
  },
  {
    name: "yellow",
    hex: "yellow.400",
  },
  {
    name: "orange",
    hex: "orange.400",
  },
]

export const alignments: SelectedData[] = [
  {
    name: "left",
    icon: <MdOutlineFormatAlignLeft />,
  },
  {
    name: "center",
    icon: <MdOutlineFormatAlignCenter />,
  },
  {
    name: "right",
    icon: <MdOutlineFormatAlignRight />,
  },
]

export const styles: SelectedData[] = [
  {
    name: "b",
    icon: <MdFormatBold />,
  },
  {
    name: "i",
    icon: <MdFormatItalic />,
  },
  {
    name: "u",
    icon: <MdFormatUnderlined />,
  },
]
