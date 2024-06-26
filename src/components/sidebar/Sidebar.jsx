import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'

function Sidebar() {

  const [open,setOpen] = useState(false)

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      },
    },
  };

  return (
    <motion.div  className='flex flex-col items-center justify-center bg-white text-black' animate={open ? "open" : "closed"}>
        <motion.div className='fixed top-0 left-0 bottom-0 w-[400px] bg-white ' variants={variants}>
        <Links />
        </motion.div>

        <ToggleButton setOpen={setOpen}/>
      
    </motion.div>
  )
}

export default Sidebar
