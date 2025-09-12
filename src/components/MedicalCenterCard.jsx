import React from 'react'

const MedicalCenterCard = ({ data }) => {

    return (
        <div style={{ width: '785px', height: '270px', display: 'flex' }}>
            <img src='medicalcenter.svg' />

            <div>
                <p>{data['Hospital Name']}</p>
                <p>{data['State']}, {data['City']}</p>

                <p style={{color : '#02A401', fontWeight : 'bolder', fontSize : '14px'}}>FREE</p>
            </div>
        </div>
    )
}

export default MedicalCenterCard