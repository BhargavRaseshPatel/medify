import React from 'react'

const AskedQuestion = () => {
    return (
        <div style={{ height: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: '#2AA7FF', fontSize: '16px', textAlign: 'center' }}>Get Your Answer</p>
            <p style={{ fontSize: '48px', textAlign: 'center', marginBottom: '25px' }}>Frequently Asked Questions</p>

            <div style={{ display: 'grid', gridTemplateColumns : '1fr 1fr' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                    <img src='doctor-customer.svg' width='450px' />
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent : 'center', gap: '24px', border: '1px black solid', margin: '48px', padding :'48px' }}>
                    <div style={{ display: 'flex', alignItems : 'center', justifyContent :'space-between', height : '32px' }}>
                        <p style={{fontSize : '18px', color : '#1B3C74', fontWeight : 'bolder'}}>Why choose our medical for your family ?</p>
                        <img src='add.svg' />
                    </div>

                    <div style={{ display: 'flex', alignItems : 'center', justifyContent :'space-between', height : '32px' }}>
                        <p style={{fontSize : '18px', color : '#1B3C74', fontWeight : 'bolder'}}>Why we are different from others ?</p>
                        <img src='add.svg' />
                    </div>

                    <div style={{ display: 'flex', alignItems : 'center', justifyContent :'space-between', height : '32px' }}>
                        <p style={{fontSize : '18px', color : '#1B3C74', fontWeight : 'bolder'}}>Trusted & experience senior care & love ?</p>
                        <img src='add.svg' />
                    </div>

                    <div style={{ display: 'flex', alignItems : 'center', justifyContent :'space-between', height : '32px' }}>
                        <p style={{fontSize : '18px', color : '#1B3C74', fontWeight : 'bolder'}}>How to get appointment for emergency cases ?</p>
                        <img src='add.svg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskedQuestion