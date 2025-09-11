import React from 'react'
import Button from './ui/Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{ width: '100%', display: 'flex' , justifyContent : 'center'}}>

            <div style={{ display: 'flex',width : '1170px', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', paddingBottom: '16px' }}>
                <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src='icon.svg' style={{ width: '23px', height: '23px' }} />
                    <p style={{ marginLeft: '4px', color :'#2AA8FF' }}>Medify</p>
                </Link>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', color :'#102851' }}>
                    <Link to='find-doctor' style={{textDecoration : 'none', color: '#102851'}}>Find Doctors</Link>
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