import React, { useState } from 'react';
import PostForm from '../Components/PostForm';
import { motion } from 'framer-motion';

const CreateTold = ({ onClose }) => { // Ajout de onClose pour gérer la fermeture du composant
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center justify-center w-full h-full fixed z-50 top-[4.5em] bg-base-200 border border-cyan-100 rounded-lg'>
      <div className='absolute top-0 flex justify-end items-center w-full mr-[2em] mt-4'>
        <i
          className="fa-solid fa-xmark py-2 px-[0.7em] rounded-full bg-gradient-to-t from-cyan-300 to-green-400"
          onClick={onClose} // Appel de la fonction onClose pour fermer le composant
        ></i>
      </div>
      <PostForm />
    </motion.div>
  );
};

export default CreateTold;
