import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import HomeCardActionMenu from './HomeCardActionMenu';

const HomeCard = () => {
    const [postedAt, setPostedAt] = useState('');
    const [told, setTold] = useState([]);
    const [stateLikes, setStateLikes] = useState(false);

    useEffect(() => {
        const currentTime = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = daysOfWeek[currentTime.getDay()];
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const time = `${day} ${hours}h${minutes}`;
        setPostedAt(time);
    }, []);

    const getTold = async () => {
        try {
            const response = await axios.get("http://localhost:5000/told");
            setTold(response.data);
        } catch (error) {
            console.error('Error while getting Told', error.message);
        }
    };

    const handleDeleteStatusChange = async (status, id) => {
        if (status) {
            try {
                await axios.delete(`http://localhost:5000/told/${id}`);
                console.log("Deleted successfully");
                setTold(told.filter(item => item.told_id !== id));
            } catch (error) {
                console.error('Error while deleting Told', error.message);
            }
        }
    };

    const handleLikes = async (id, currentLikes) => {
        const newLikes = stateLikes ? currentLikes - 1 : currentLikes + 1;
        setStateLikes(!stateLikes);

        try {
            await axios.put(`http://localhost:5000/update_likes/${id}`, {
                likes: newLikes
            });
            console.log(stateLikes ? 'Likes deleted successfully!' : 'Likes added successfully!');
            setTold(told.map(item =>
                item.told_id === id ? { ...item, likes: newLikes } : item
            ));
        } catch (error) {
            console.error('Error updating likes:', error.message);
        }
    };

    useEffect(() => {
        getTold();
    }, []);

    return (
        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 relative">
            {told.map((item, index) => (
                <div className='border border-accent rounded-lg' key={index} >
                    <div className="card bg-base-100 shadow-lg">
                        <HomeCardActionMenu
                            sendDellStateToParent={(status) => handleDeleteStatusChange(status, item.told_id)}
                            sendEditInfosToChild={item}
                        />
                        <div className="card-body ">
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
