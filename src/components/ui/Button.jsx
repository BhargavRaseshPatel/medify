import React from 'react'

const Button = ({ name, onClick }) => {
    return (
        <div>
            <button style={{color : 'white' , padding : '9px', paddingRight : '24px', paddingLeft : '24px', backgroundColor : '#2AA8FF', border : '0px', borderRadius : '8px'}}
            onClick={onClick}>
                {name}
            </button>
        </div>
    )
}

export default Button