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
    hex: "#E53E3E",
  },
  {
    name: "green",
    hex: "#38A169",
  },
  {
    name: "blue",
    hex: "#3182CE",
  },
  {
    name: "purple",
    hex: "#805AD5",
  },
  {
    name: "yellow",
    hex: "#D69E2E",
  },
  {
    name: "orange",
    hex: "#DD6B20",
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
