import React from 'react'

const PatientCaring = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '100px', marginRight: '100px' }}>
            <div>
                <div style={{ position: 'relative', textAlign: 'right', marginTop: '-50px', marginRight: '50px' }}>
                    <div style={{ position: 'absolute', backgroundColor: 'white',top: '90px', left: '80px', zIndex: 2, padding: '12px', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='home/call.svg' />
                            <p style={{ marginLeft: '8px', color: '#1B3C74', fontWeight: 'bolder' }}>Free Consultation</p>
                        </div>
                        <p style={{ color: '#77829D', marginTop: '8px', fontSize: '15px' }}>Consultation with the best</p>
                    </div>
                    <img src='home/image1.svg' style={{ position: 'absolute', right: '0px' }} />
                    <img src='home/image2.svg' style={{ position: 'absolute', left: '24px', top: '200px' }} />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <p style={{ color: '#2AA7FF' }}>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <p style={{ fontSize: '48px' }}>Patient <span style={{ color: '#2AA7FF' }}>Caring</span></p>
                <p style={{ fontSize: '18px', color: '#77829D' }}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>

                <div style={{ display: 'flex' }}>
                    <img src="list-item.svg" alt="" />
                    <p style={{ marginLeft: '16px' }}>Stay Updated About Your Health</p>
                </div>

                <div style={{ display: 'flex' }}>
                    <img src="list-item.svg" alt="" />
                    <p style={{ marginLeft: '16px' }}>Check Your Results Online</p>
                </div>

                <div style={{ display: 'flex' }}>
                    <img src="list-item.svg" alt="" />
                    <p style={{ marginLeft: '16px' }}>Manage Your Appointments</p>
                </div>
            </div>
        </div>
    )
}

export default PatientCaring