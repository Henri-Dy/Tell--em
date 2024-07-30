import React from 'react'

const PostForm = () => {
  return (
    <form className='flex flex-col px-5 py-3 gap-4 w-full sm:w-[25em]  '>
      <input type="text" placeholder="Type here" className="input input-bordered w-full border-cyan-400 " />
      <textarea className="textarea textarea-bordered h-[15em] border-cyan-400" placeholder="Bio"></textarea>
      <button className='btn bg-gradient-to-r from-cyan-400 to-green-400 border-none text-white'>Submit</button>
    </form>
  )
}

export default PostForm