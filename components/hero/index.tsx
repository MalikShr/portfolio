"use client"

import { useState, useRef, useEffect } from "react"
import { Box } from "@chakra-ui/react"
import { TechnologyItems } from "./technologyItems"
import { DraggableBox } from "./draggableBox"
import ColorSelection from "./colorSelection"
import ChakraProviderWrapper from "@/configuration/ChakraProviderWrapper"
import { baseDisplay, mdDisplay } from "@/configuration/Values"

export const Hero = () => {
  const [bg, setBg] = useState("")

  const constraintsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setBg("#E53E3E")
  }, [])

  return (
    <ChakraProviderWrapper>
      <ColorSelection setBg={setBg} bg={bg} />
      <Box id="home">
        <Box
          h="45vh"
          bg={bg}
          display={mdDisplay}
          transition="800ms"
          transitionTimingFunction="ease-in-out"
          justifyContent="center"
          alignItems="center"
          ref={constraintsRef}
        >
          <DraggableBox constrainsRef={constraintsRef} />
        </Box>
        <Box
          as="h1"
          display={baseDisplay}
          bg={bg}
          p={100}
          fontSize="50px"
          fontWeight={600}
          justifyContent="center"
          alignContent="center"
          color="white"
        >
          Portfolio
        </Box>
      </Box>
      <TechnologyItems />
    </ChakraProviderWrapper>
  )
}
