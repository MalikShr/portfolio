"use client"

import { Box, HStack, Text } from "@chakra-ui/react"
import { FC, RefObject, useState, useEffect } from "react"
import { alignments, styles } from "../Data"
import { Cursor } from "@/components/cursor/Cursor"
import { MotionDiv } from "@/configuration/motion"

interface Props {
  constrainsRef: RefObject<Element>
}

export const DraggableBox: FC<Props> = ({ constrainsRef }) => {
  const [selectedAlignment, setSelectedAlignment] = useState<any>("center")
  const [selectedStyle, setSelectedStyle] = useState<any>("b")

  const handleBgAlignment = (selected: string, name: string) => {
    if (selected === name) return "#CBD5E0"
    return "none"
  }

  return (
    <MotionDiv
      position="relative"
      display="grid"
      w={{ md: 500, lg: 600 }}
      border="2px dotted white"
      initial={{ x: 100, y: 100, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      drag
      dragConstraints={constrainsRef}
      //@ts-ignore
      transition={{ duration: 1, delay: 1, type: "spring", stiffness: 30 }}
    >
      <HStack bg="white" w="100%" justifyContent="space-between" p={2}>
        <HStack>
          {styles.map((item) => (
            <Box
              onClick={() => setSelectedStyle(item.name)}
              key={item.name}
              borderRadius={5}
              fontSize="30px"
              p={1}
              //@ts-ignore
              bg={() => handleBgAlignment(selectedStyle, item.name)}
            >
              {item.icon}
            </Box>
          ))}
        </HStack>
        <HStack>
          {alignments.map((item) => (
            <Box
              onClick={() => setSelectedAlignment(item.name)}
              //@ts-ignore
              bg={() => handleBgAlignment(selectedAlignment, item.name)}
              key={item.name}
              fontSize="30px"
              p={1}
              borderRadius={5}
            >
              {item.icon}
            </Box>
          ))}
        </HStack>
      </HStack>
      <HStack justifyContent={selectedAlignment} as="h1" p={10}>
        <Text
          color="white"
          as={selectedStyle}
          _hover={{ cursor: "move" }}
          fontSize="60px"
        >
          Portfolio
        </Text>

        <Cursor height="60%" width="3px" backgroundColor="white" />
      </HStack>
    </MotionDiv>
  )
}
