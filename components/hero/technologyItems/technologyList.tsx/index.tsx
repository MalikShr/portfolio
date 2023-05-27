import { Box, Grid, GridItem, HStack } from "@chakra-ui/react"
import { FC } from "react"
import { Technology } from "../Data"
import Image from "next/image"
import {
  baseDisplay,
  mdDisplay,
  responsiveSubHeader,
} from "@/configuration/Values"
import { SubHeader } from "@/components/headers/subHeader"

interface Props {
  type: Technology[]
  header: string
}

export const TechnologyList: FC<Props> = ({ type, header }) => {
  return (
    <Box mt="20px">
      <Box
        fontSize={{ base: "20px", md: "25px" }}
        fontWeight={600}
        w="100%"
        textAlign="center"
      >
        {header}
      </Box>
      <HStack
        justifyContent="space-between"
        display={mdDisplay}
        pb="50px"
        mt="20px"
        textAlign="center"
      >
        {type.map((item, index) => (
          <Box
            as="button"
            _hover={{ opacity: 0.8, transform: "scale(1.02)" }}
            display="flex"
            alignItems="center"
            key={index}
            bg="gray.100"
            px="15px"
            py="5px"
            borderRadius="5px"
          >
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={48}
              height={48}
              draggable={false}
            />
            <Box ml={3}>{item.name}</Box>
          </Box>
        ))}
      </HStack>

      <Box display={baseDisplay}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
          {type.map((item, index) => (
            <GridItem
              w="100%"
              textAlign="center"
              key={index}
              bg="gray.100"
              px="15px"
              borderRadius="5px"
              p={5}
            >
              <Box w="100%" display="flex" justifyContent="center">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={50}
                  height={50}
                />
              </Box>

              <Box w="100%">{item.name}</Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
