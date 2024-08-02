import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import HomeCardActionMenu from './HomeCardActionMenu';

const HomeCard = () => {
    const [postedAt, setPostedAt] = useState('');
    const [told, setTold] = useState([]);
    const [stateLikes, setStateLikes] = useState({}); // Utiliser un objet pour gérer les likes individuellement

    useEffect(() => {
        const currentTime = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = daysOfWeek[currentTime.getDay()];
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const time = `${day} ${hours}h${minutes}`;
        setPostedAt(time);
    }, []);

    useEffect(() => {
        const fetchTold = async () => {
            try {
                const response = await axios.get("http://192.168.1.198:5000/told");
                setTold(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error while getting Told', error.message);
            }
        };

        fetchTold();

        // Re-fetch data every 10 seconds
        const intervalId = setInterval(fetchTold, 1000);
        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);

    const handleDeleteStatusChange = async (status, id) => {
        if (status) {
            try {
                await axios.delete(`http://192.168.1.198:5000/told/${id}`);
                console.log("Deleted successfully");
                setTold(told.filter(item => item.told_id !== id));
            } catch (error) {
                console.error('Error while deleting Told', error.message);
            }
        }
    };

    const handleLikes = async (id, currentLikes) => {
        const newLikes = stateLikes[id] ? currentLikes - 1 : currentLikes + 1;
        setStateLikes(prev => ({ ...prev, [id]: !prev[id] }));

        try {
            await axios.put(`http://192.168.1.198:5000/update_likes/${id}`, { likes: newLikes });
            console.log(stateLikes[id] ? 'Likes deleted successfully!' : 'Likes added successfully!');
            setTold(told.map(item =>
                item.told_id === id ? { ...item, likes: newLikes } : item
            ));
        } catch (error) {
            console.error('Error updating likes:', error.message);
        }
    };

    return (
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 relative">
            {told.map((item) => (
                <div className='border border-accent rounded-lg' key={item.told_id} >
                    <div className="card bg-base-100 shadow-lg">
                        <HomeCardActionMenu
                            sendDellStateToParent={(status) => handleDeleteStatusChange(status, item.told_id)}
                            sendEditInfosToChild={item}
                        />
                        <div className="card-body">
                            <h2 className="card-title uppercase">{item.title}</h2>
                            <p className='text-xs'>{item.description}</p>
                            <div className="card-actions flex items-center justify-between">
                                <p className='text-xs text-neutral'>{item.created_at}</p>
                                <button className="btn btn-accent" onClick={() => handleLikes(item.told_id, item.likes)}>
                                    Likes {item.likes}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default HomeCard;
