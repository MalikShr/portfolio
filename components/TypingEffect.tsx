import { Box, HStack } from "@chakra-ui/react"
import React, { useState, useEffect, FC, useRef } from "react"
import { Cursor } from "./cursor/Cursor"

interface Props {
  text: string
  duration: number
}

export const TypingEffect: FC<Props> = ({ text, duration }) => {
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const typingRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let currentIndex = 0
    let newText = ""

    const intervalId = setInterval(() => {
      if (currentIndex !== text.length) {
        newText += text[currentIndex]
        setCurrentText(newText)
        ++currentIndex
      } else {
        clearInterval(intervalId)
      }
    }, duration)

    return () => {
      clearInterval(intervalId)
    }
  }, [text, duration])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTyping(true)
        } else {
          setIsTyping(false)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (typingRef.current) {
      observer.observe(typingRef.current)
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current)
      }
    }
  }, [])

  return <Box ref={typingRef}>{currentText}</Box>
}
