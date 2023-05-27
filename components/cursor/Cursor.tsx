import { MotionDiv } from "@/configuration/motion"
import { FC } from "react"

const cursorVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const transition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: [0.43, 0.13, 0.23, 0.96],
}

interface Props {
  width: string
  height: string
  backgroundColor: string
}

export const Cursor: FC<Props> = ({ width, height, backgroundColor }) => {
  return (
    <MotionDiv
      h={height}
      w={width}
      bg={backgroundColor}
      initial="visible"
      animate="hidden"
      exit="hidden"
      variants={cursorVariants}
      //@ts-ignore
      transition={transition}
    ></MotionDiv>
  )
}
