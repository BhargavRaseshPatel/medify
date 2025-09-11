import React from 'react'

const Footer = () => {
    return (
        <div style={{ height: '324px', backgroundColor: '#1B3C74', padding: '25px', zIndex : 5 }}>
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', width: '1143px', marginTop: '48px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='icon.svg' />
                            <p style={{ color: '#2AA8FF', fontSize: '24px', marginLeft: '8px' }}>Medify</p>
                        </div>

                        <div style={{ display: 'flex', gap: '18px' }}>
                            <img src='social_media/facebook.svg' />
                            <img src='social_media/twitter.svg' />
                            <img src='social_media/youtube.svg' />
                            <img src='social_media/pinterest.svg' />
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                        <div style={{ color: 'white' }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyleType: '"› "' }}>
                                <li>About Us</li>
                                <li>Our Pricing</li>
                                <li>Our Gallery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        <div style={{ color: 'white' }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyleType: '"› "' }}>
                                <li>Orthology</li>
                                <li>Neurology</li>
                                <li>Dental Care</li>
                                <li>Opthalmology</li>
                                <li>Cardiology</li>
                            </ul>
                        </div>

                        <div style={{ color: 'white' }}>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyleType: '"› "' }}>
                                <li>About Us</li>
                                <li>Our Pricing</li>
                                <li>Our Gallery</li>
                                <li>Appointment</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
            <div style={{ height: '60xp', borderTopColor: 'white', color: 'white', marginLeft : '128px', marginTop : '64px', paddingTop : '28px', borderTop :'1px solid gray', marginRight : '128px' }}>
                <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer