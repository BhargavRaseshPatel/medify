import React from 'react'
import { FaSearch } from "react-icons/fa";


const InputField = ({ placeholder, width, icon }) => {
    return (
        <div style={{ width: width, border: '1px solid #F0F0F0', padding: '10px', display : 'flex',backgroundColor : '#FAFBFE', color :'#9CA3AF', borderRadius: '8px' }}>
            {icon == 'Search' && <FaSearch />}
            <input style={{ width: '100%', border: '0px', outline: 'none', fontSize: '14px', backgroundColor : '#FAFBFE', marginLeft : '8px' }} placeholder={placeholder} />
        </div>
    )
}

export default InputField