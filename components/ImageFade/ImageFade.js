import Image from "next/image"
import { useState, useLayoutEffect, useRef } from "react"

const { motion } = require("framer-motion");

const variants = {
    open: { opacity: 1, transition: { duration: 0.25} },
    closed: { opacity: 0 },
}

const ImageFade = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const ref = useRef(null)

    useLayoutEffect(() => {
        if ( props.priority ) {
            setIsOpen(true)
        }
    }, [ref, props.priority])
    

    return (
        <motion.div
            ref={ref}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}

        >
            <Image
            {...props}
            onLoad={
                () => {
                    setIsOpen(true)
                }
            }
            />
        </motion.div>
    )
}

export default ImageFade
