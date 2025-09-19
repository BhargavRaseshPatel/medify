import React from 'react'
import Button from './ui/Button'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const currentUrl = window.location.pathname.split('/')[1];
    // console.log('Current URL:', currentUrl);

    const handleBooking = () => {
        navigate('/my-bookings')
    }
    return (
        <div style={{ width: '100%', display: 'flex' , justifyContent : 'center'}}>

            <div style={{ display: 'flex',width : '1170px', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px'}}>
                <Link to={'/'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src='icon.svg' style={{ width: '23px', height: '23px' }} />
                    <p style={{ marginLeft: '4px', color :'#2AA8FF' }}>Medify</p>
                </Link>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'center', color :'#102851' }}>
                    {currentUrl == 'find-doctor' ? <div style={{height : '100%',borderBottom : '3px solid #2AA7FF', paddingTop: '16px', paddingBottom: '16px'}}> <p>Find Doctors</p> </div>: 
                    <Link to='find-doctor' style={{textDecoration : 'none', color: '#102851', paddingTop: '16px', paddingBottom: '16px'}}>Find Doctors</Link>}
                    <p>Hostipals</p>
                    <p>Medicines</p>
                    <p>Surgeries</p>
                    <p>Software for Provider</p>
                    <p>Facilities</p>

                    <Button name={'My Bookings'} onClick={handleBooking}/>
                </div>
            </div>
        </div>
    )
}

export default Header