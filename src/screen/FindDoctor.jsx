import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";

const FindDoctor = () => {
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [selectedState, setSelectedState] = useState('')
    const [selectedCities, setSelectedCities] = useState('')

  return (
    <div style={{width : '1166px'}}>
        <div style={{height : '111px', display : 'flex', gap : '24px', color : '#9CA3AF'}}>
            <div style={{width :"326px", height: '50px',border : '1px solid #F0F0F0', padding : '8px'}}>
                <IoLocationOutline size={{width :"24px" , height : '24px'}}/>
            </div>
        </div>
    </div>
  )
}

export default FindDoctor