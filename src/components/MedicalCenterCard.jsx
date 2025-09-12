import React, { useEffect } from 'react'
import Button from './ui/Button'

const MedicalCenterCard = ({ data }) => {

    // console.log(data)
    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <div style={{ width: '785px', height: '270px', display: 'flex', backgroundColor: 'white', borderRadius: '15px', resize: 'none' }}>
            <div style={{ width: '487px', minWidth: '487px', height: '220px', display: 'flex', alignItems: 'center', marginLeft: "24px" }}>
                <img src='medicalcenter.svg' style={{ width: '140px', height: "140px" }} />

                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '24px', gap: '18px', marginTop : '24px' }}>
                    <p style={{ color: '#14BEF0', fontSize: '20px', whiteSpace: 'nowrap' }}>{data['Hospital Name'].toLowerCase()
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}</p>
                    <div>
                        <p style={{ fontWeight: 'bolder' }}>{data['State']}, {data['City'].charAt(0) + data['City'].slice(1).toLowerCase()}</p>
                        <p style={{ color: '#414146', fontSize: '14px' }}>Smilessence Center for Advanced Dentistry + 1 more</p>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <p style={{ color: '#02A401', fontWeight: 'bolder', fontSize: '14px' }}>FREE</p>
                        <p style={{ color: '#414146' }}><span style={{ marginLeft: '8px', textDecoration: 'line-through' }}> ₹500</span> Consultation fee at clinic</p>
                    </div>

                    <div style={{backgroundColor : '#00A500', color : 'white', width : '44px', height : '22px', borderRadius : '3px', display : 'flex' , justifyContent : 'center', alignItems : 'center', gap: '4px'}}>
                        <img src='thumbsUp.svg'/>{data['Hospital overall rating']}
                    </div>
                </div>

            </div>
            <div style={{ width: '236px', height: '220px', margin: '24px', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '0px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: "#01A400", textAlign: 'center' }}>Available Today</p>
                    <div style={{ marginBottom: '16px', marginTop: '8px' }}>
                        <Button name={'Book FREE Center Visit'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicalCenterCard