import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="flex-1 rounded-full bg-sky-500 py-3  text-center text-lg font-bold hover:bg-sky-500/90">
      {text}
    </button>
  )
}

export default Button
