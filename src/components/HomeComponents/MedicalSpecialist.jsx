import React from 'react'

const MedicalSpecialist = () => {
    const data = [
        { image: 'image2.svg', name: 'Dr. Ahmad Khan', position: 'Neurologist' },
        { image: 'image3.svg', name: 'Dr. Heena Sachdeva', position: 'Orthopadics' },
        { image: 'image4.svg', name: 'Dr. Ankur Sharma', position: 'Medicine' }
    ]
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
            <p style={{ color: '#1B3C74', fontSize: '48px', fontWeight: 'bold' }}>Our Medical Specialist</p>

            <div style={{ display: 'flex', gap: '24px' }}>
                {data.map((item, index) => (
                    <div style={{display : 'flex',flexDirection : 'column', justifyContent : 'center', alignItems : 'center', gap : '24px'}}>
                        <img src={`specialist/${item.image}`} />
                        <p style={{color : '#1B3C74', fontSize :"24px"}}>{item.name}</p>
                        <p style={{color : '#2AA7FF', fontSize : '17px'}}>{item.position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MedicalSpecialist