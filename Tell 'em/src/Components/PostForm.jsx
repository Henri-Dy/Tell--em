import React, { useState , useEffect } from 'react';
import axios from 'axios';
;

const PostForm = () => {
  /*use state hooks*/
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [likes, setLikes] = useState(0);
  const [postedAt, setPostedAt] = useState('');
  /*-------------------------------------------------------- */

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentTime = new Date().toISOString();
    setCreatedAt(currentTime);
    
    try {
      await axios.post('http://localhost:5000/told', {
        title,
        description,
        created_at: postedAt,
        likes
      });
      console.log("Post sent successfully");
      window.location.reload() ;
    } catch (error) {
      console.error('Error sending post', error.message);
    }
  };

  return (
    <form className='flex flex-col px-5 py-3 gap-4 w-full sm:w-[25em]' onSubmit={handleSubmit}>
      
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full border-cyan-400 uppercase"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
       
      <textarea
        className="textarea textarea-bordered h-[15em] border-cyan-400"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className='btn bg-gradient-to-r from-cyan-400 to-green-400 border-none text-white'>
        Submit
      </button>
    </form>
  );
}

export default PostForm;
