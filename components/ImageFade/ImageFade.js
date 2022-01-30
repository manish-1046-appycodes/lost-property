import Image from "next/image"
import { useState, useEffect } from "react"

const { motion } = require("framer-motion");

const variants = {
    open: { opacity: 1, transition: { duration: 0.25} },
    closed: { opacity: 0 },
}

const ImageFade = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        
    }, [])
    
    
    return (
        <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}

        >
            <Image
            {...props}
            onLoadingComplete={
                () => {
                    setIsOpen(true)
                }
            }
            />
        </motion.div>
    )
}

export default ImageFade
