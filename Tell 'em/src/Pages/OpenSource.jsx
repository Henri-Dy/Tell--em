import React from 'react'

const OpenSource = () => {
  return (
    <motionConfig.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 60 }}
    transition={{ duration: 0.5 }}
    >
        Open Source
    </motionConfig.div>
  )
}

export default OpenSource