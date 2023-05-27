"use client"

import { Box, HStack } from "@chakra-ui/react"
import { Link } from "react-scroll/modules"
import { navData } from "../Data"
import { mdDisplay } from "@/configuration/Values"

export const NavFull = () => {
  return (
    <HStack
      display={mdDisplay}
      w="100%"
      transition="500ms"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      spacing={100}
      p={5}
    >
      {navData.map((item, index) => (
        <Box
          as="button"
          position="relative"
          key={"nav" + index}
          px={5}
          fontSize="25px"
          fontWeight={600}
          _after={{
            content: '""',
            position: "absolute",
            width: "100%",
            height: "2px",
            bottom: 0,
            left: 0,
            backgroundColor: "#E53E3E",
            transition: "transform 0.2s ease-out",
            transform: "scaleX(0)",
          }}
          _hover={{
            _after: {
              transform: "scaleX(1)",
            },
          }}
        >
          <Link
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to={item.href}
          >
            {item.name}
          </Link>
        </Box>
      ))}
    </HStack>
  )
}
