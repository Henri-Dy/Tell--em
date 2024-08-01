import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const EditForm = ({ onClose, editInfos }) => {
    const [edit, setEdit] = useState(editInfos);
    const [title, setTitle] = useState(editInfos.title);
    const [description, setDescription] = useState(editInfos.description);

    useEffect(() => {
        setEdit(editInfos);
        setTitle(editInfos.title);
        setDescription(editInfos.description);
    }, [editInfos]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:5000/told/${edit.told_id}`, {
                title,
                description,
            });
            onClose(); // Ferme le formulaire après la soumission réussie
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.5 }}
            className='fixed bottom-0 left-0 z-[90] w-full h-[90vh] flex items-center justify-center bg-base-200 rounded-lg border border-cyan-300'
        >
            <form className='flex flex-col gap-2 w-full px-4 lg:w-2/6 justify-center items-center' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-accent w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="textarea textarea-accent w-full"
                    placeholder="Bio"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className='btn btn-accent text-white w-full' type="submit">Submit</button>
            </form>
            <div className='absolute top-0 flex justify-end items-center w-full mr-[2em] mt-4'>
                <i
                    className="fa-solid fa-xmark py-2 px-[0.7em] rounded-full bg-gradient-to-t from-cyan-300 to-green-400"
                    onClick={onClose}
                ></i>
            </div>
        </motion.div>
    );
};

export default EditForm;
