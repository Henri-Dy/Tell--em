import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Connexion = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission du formulaire
  };

  return (
    <motion.div 
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 60 }}
    transition={{ duration: 0.5 }}
    className='flex items-center justify-center min-h-[90vh] '>
      <form onSubmit={handleSubmit} className='px-4 py-4 rounded-lg flex flex-col bg-base-200 gap-4 bg- border border-cyan-400'>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Username" name="username" required />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input type="password" className="grow" placeholder="Password" name="password" required />
        </label>
        <button type="submit" className='w-full bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg px-3 py-2 text-white'> Submit</button>
        <p className='text-xs text-center'>Don't have an account yet ? <span className='text-green-400'><Link to="/Inscription">Sign Up</Link></span></p>
      </form>
    </motion.div>
  );
};

export default Connexion;
