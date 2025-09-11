import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button style={{color : 'white' , padding : '9px', paddingRight : '16px', paddingLeft : '16px', backgroundColor : '#2AA8FF', border : '0px', borderRadius : '8px'}}>
                {name}
            </button>
        </div>
    )
}

export default Button