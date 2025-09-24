import React from 'react'
import { FaSearch } from "react-icons/fa";


const InputField = ({ placeholder, width, icon, id, onChange }) => {
    return (
        <div style={{ width: width, border: '1px solid #F0F0F0', padding: '10px', display : 'flex',backgroundColor : '#FAFBFE', color :'#9CA3AF', borderRadius: '8px' }} id={id}>
            {icon == 'Search' && <FaSearch />}
            <input style={{ width: '100%', border: '0px', outline: 'none', fontSize: '14px', backgroundColor : '#FAFBFE', marginLeft : '8px' }} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default InputField