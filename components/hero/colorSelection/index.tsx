"use client"

import { Box, HStack } from "@chakra-ui/react"
import { bgColors } from "../Data"
import { FC } from "react"

interface Props {
  setBg: (param: string) => void
  bg: string
}

const ColorSelection: FC<Props> = ({ setBg, bg }) => {
  const handleSelectedColor = (name: string) => {
    if (bg === name) return "2px solid white"
    return "none"
  }

  return (
    <HStack
      bg="#1A202C"
      p={{ base: "15px", md: "20px" }}
      justifyContent="center"
      spacing={{ base: 2, md: 5 }}
    >
      {bgColors.map((item) => (
        <Box
          key={item.name}
          width={{ base: "40px", md: "50px" }}
          height={{ base: "40px", md: "50px" }}
          //@ts-ignore
          border={() => handleSelectedColor(item.hex)}
          borderRadius={{ base: 5, md: 10 }}
          bg={item.hex}
          onClick={() => setBg(item.hex)}
        />
      ))}
    </HStack>
  )
}

export default ColorSelection
