import React from 'react'

const AskedQuestion = () => {
    return (
        <div style={{ height: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: '#2AA7FF', fontSize: '16px', textAlign: 'center' }}>Get Your Answer</p>
            <p style={{ fontSize: '48px', textAlign: 'center', marginBottom: '25px' ,color : '#1B3C74'}}>Frequently Asked Questions</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

                <div>
                    <div style={{ position: 'relative'}}>
                            <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', top: '300px', left: '0px', backgroundColor: 'white', borderRadius : '8px', width :'240px', height : '100px',}}>
                                <img src='smile.svg' />
                                <div style={{marginLeft : '16px'}}>
                                    <p style={{fontSize : '24px', fontWeight : 'bolder'}}>84k+</p>
                                    <p style={{color : '#77829D', fontSize :'18px'}}>Happy Patients</p>
                                </div>
                            </div>
                        </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <img src='doctor-customer.svg' width='500px' height={'480px'} />
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '150px', right: '0px', backgroundColor: 'white', width: '80px', height: '80px', borderRadius: '50%' }}>
                                <img src='heart-hand.svg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', margin: '48px', padding: '48px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '32px' }}>
                        <p style={{ fontSize: '18px', color: '#1B3C74', fontWeight: 'bolder' }}>Why choose our medical for your family ?</p>
                        <img src='add.svg' />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '32px' }}>
                        <p style={{ fontSize: '18px', color: '#1B3C74', fontWeight: 'bolder' }}>Why we are different from others ?</p>
                        <img src='add.svg' />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '32px' }}>
                        <p style={{ fontSize: '18px', color: '#1B3C74', fontWeight: 'bolder' }}>Trusted & experience senior care & love ?</p>
                        <img src='add.svg' />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '32px' }}>
                        <p style={{ fontSize: '18px', color: '#1B3C74', fontWeight: 'bolder' }}>How to get appointment for emergency cases ?</p>
                        <img src='add.svg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskedQuestion