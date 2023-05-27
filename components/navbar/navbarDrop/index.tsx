"use client"
import {
  Flex,
  useDisclosure,
  Box,
  Collapse,
  HStack,
  VStack,
} from "@chakra-ui/react"

import { MdMenu, MdClose } from "react-icons/md"
import { navData } from "../Data"
import { Link } from "react-scroll"

export const NavDrop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        bg="white"
        alignItems="center"
        justifyContent="space-between"
        w="full"
        h="70px"
        fontSize="sm"
        top={0}
        zIndex={99}
        px={4}
      >
        <Box
          as="button"
          fontSize={"4xl"}
          bg="none"
          display={{ md: "none" }}
          _active={{ bg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </Box>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box w="full" bg="white" display={{ md: "none" }}>
          <VStack>
            {navData.map((item, index) => (
              <HStack
                w="full"
                as="button"
                key={"nav" + index}
                py={2}
                pl={5}
                _hover={{ opacity: 0.6 }}
                onClick={isOpen ? onClose : onOpen}
              >
                <Link to={item.href}>{item.name}</Link>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Collapse>
    </>
  )
}
