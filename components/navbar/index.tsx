"use client"
import { NavFull } from "./navbarFull"
import { NavDrop } from "./navbarDrop"
import ChakraProviderWrapper from "@/configuration/ChakraProviderWrapper"

const Navbar = () => {
  return (
    <ChakraProviderWrapper>
      <NavFull />
      <NavDrop />
    </ChakraProviderWrapper>
  )
}

export default Navbar
