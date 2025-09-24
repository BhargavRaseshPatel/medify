import React from 'react'

const Button = ({ name, onClick, id = 'abc', icon, style = {}, ...props }) => {
  return (
    <button
      id={id}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        gap: '8px', // Add spacing between icon and text
        color: 'white',
        padding: '8px 24px',
        backgroundColor: '#2AA8FF',
        border: '0px',
        textAlign: 'center',
        borderRadius: '8px',
        fontSize: '16px',
        ...style, // ✅ merge custom styles safely
      }}
      onClick={onClick}
      {...props} // ✅ spread props correctly here
    >
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
      <span style={{ textAlign: 'center', flex: 1 }}>{name}</span> {/* Center text */}
    </button>
  )
}

export default Button
