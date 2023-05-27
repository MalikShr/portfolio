import { chakra, shouldForwardProp } from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"

export const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop: any) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})
