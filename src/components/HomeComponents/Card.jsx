import React from 'react'

const Card = ({image, name, bgColor}) => {
  return (
    <div style={{width : '203px', height : '153px', backgroundColor : `${bgColor ? bgColor : 'white'}`, borderRadius : '8px'}}>
        <img src={image} alt={name} width='60px' height='60px' style={{marginLeft :"72px", marginTop : '25px'}}/>
        <p style={{textAlign : 'center'}}>{name}</p>
    </div>
  )
}

export default Card