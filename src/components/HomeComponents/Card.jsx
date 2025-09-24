import React from 'react'

const Card = ({image, name, bgColor, selected}) => {
  return (
    <div style={{width : '203px', height : '153px', backgroundColor : `${bgColor ? bgColor : 'white'}`, borderRadius : '8px', border: `${selected && '3px solid #2AA7FF'}`}}>
        <img src={image} alt={name} width='60px' height='60px' style={{marginLeft :"72px", marginTop : '25px'}}/>
        <p style={{textAlign : 'center', color : `${selected ? '#2AA7FF' :  '#5C6169'}`, marginTop : '18px'}}>{name}</p>
    </div>
  )
}

export default Card