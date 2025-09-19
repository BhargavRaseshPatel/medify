import React from 'react'

const Button = ({ name, onClick, id = 'abc', style = {}, ...props }) => {
  return (
    <div>
      <button
        id={id}
        style={{
          color: 'white',
          padding: '9px',
          paddingRight: '24px',
          paddingLeft: '24px',
          backgroundColor: '#2AA8FF',
          border: '0px',
          borderRadius: '8px',
          ...style, // ✅ merge custom styles safely
        }}
        onClick={onClick}
        {...props} // ✅ spread props correctly here
      >
        {name}
      </button>
    </div>
  )
}

export default Button
