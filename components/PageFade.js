import React from 'react'
import { motion } from 'framer-motion'

const myAnimation = {
  initial: {
    opacity: 0,
    top: "0"
  },
  animate: {
    opacity: 1,
    top: "0"
  },
  exit: {
    opacity: 0,
    top: "0"
  },
  transition: {
    duration: 0.25
  }
}
const PageFade = ({children}) => {
    return (
        <motion.div
        className="relative"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={myAnimation.transition}
        variants={myAnimation}>
        {children}
        </motion.div>
    )
}

export default PageFade
