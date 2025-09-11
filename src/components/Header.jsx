import React from 'react'
import Button from './ui/Button'

const Header = () => {
    return (
        <div style={{ width: '100%', display: 'flex' , justifyContent : 'center'}}>

            <div style={{ display: 'flex',width : '1170px', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='icon.svg' style={{ width: '23px', height: '23px' }} />
                    <p style={{ marginLeft: '4px' }}>Medify</p>
                </div>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <p>Find Doctors</p>
                    <p>Hostipals</p>
                    <p>Medicines</p>
                    <p>Surgeries</p>
                    <p>Software for Provider</p>
                    <p>Facilities</p>

                    <Button name={'My Bookings'} />
                </div>
            </div>
        </div>
    )
}

export default Header