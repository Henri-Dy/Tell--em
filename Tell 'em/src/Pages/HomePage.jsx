import React from 'react'
import HomeCard from '../Components/HomeCard'
import { motion } from 'framer-motion';


const HomePage = () => {

    return (
        <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='min-h-[90vh] relative'>
            <HomeCard />
        </motion.div>
    )
}

export default HomePage