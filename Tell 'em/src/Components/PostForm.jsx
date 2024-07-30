import React from 'react'

const PostForm = () => {
  return (
    <form className='flex flex-col px-5 py-3 gap-4 w-full sm:w-[25em]  '>
      <input type="text" placeholder="Type here" className="input input-bordered w-full " />
      <textarea className="textarea textarea-bordered h-[15em]" placeholder="Bio"></textarea>
      <button className='btn bg-gradient-to-r from-cyan-300 to-green-300 border-none'>Submit</button>
    </form>
  )
}

export default PostForm