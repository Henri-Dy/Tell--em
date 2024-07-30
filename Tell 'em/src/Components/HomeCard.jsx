import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const HomeCard = () => {
    const [postedAt, setPostedAt] = useState('');
    const [told, setTold] = useState([]);

    // Pour obtenir l'heure actuelle
    useEffect(() => {
        const currentTime = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = daysOfWeek[currentTime.getDay()];
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Pour s'assurer que les minutes ont toujours deux chiffres
        const time = `${day} ${hours}h${minutes}`;
        setPostedAt(time);
    }, []);

    // Pour obtenir les données "told"
    const getTold = async () => {
        try {
            const response = await axios.get("http://localhost:5000/told");
            setTold(response.data);
        } catch (error) {
            console.error('Error while getting Told', error.message);
        }
    };

    useEffect(() => {
        getTold();
    }, []);

    return (
        <motion.div 
        
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4">
            {told.map((item, index) => (
                <div className='border border-accent rounded-lg' key={index} >
                    <div  className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">I'm a told!</h2>
                            <p className='text-xs'>{item.description}</p>
                            <div className="card-actions flex items-center justify-between">
                                <p className='text-xs text-neutral'>{postedAt}</p>
                                <button className="btn btn-accent">Like it</button>
                            </div>
                        </div>
                    </div>
                </div>
            )) }
        </motion.div>
        
    );
};

export default HomeCard;
