import { useState, useRef, useEffect, ReactNode } from 'react'
import { motion, useViewportScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion'

const rand = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  };

const ParallaxItem = ({ children, offset = 457 }) => {
  const prefersReducedMotion = useReducedMotion()
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const y = useSpring(yRange, { stiffness: 400, damping: 90, mass: rand(1, 3) })

  useEffect(() => {
    const element = ref.current
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export default ParallaxItem