import React from 'react'
import StateCard from '../ui/StateCard'

const State = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width : '100%', gap : '24px' }}>
            <div style={{display : 'flex', justifyContent :'center', flexDirection : 'column'}}>
                <p style={{color : '#2AA7FF', fontWeight : 'bold'}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                <p style={{fontSize : '48px', color: '#1B3C74'}}>Our Families</p>
                <p style={{color : 'gray'}}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>

            <div style={{  display: 'grid', gridTemplateColumns : '1fr 1fr'}}>
                <div >
                    <StateCard state={5000} name={'Happy Patients'} src={'state/patients.svg'} bgColor={'#EBF7FF'}/>
                    <StateCard state={1000} name={'Laboratories'} src={'state/laboratories.svg'} bgColor={'#FFF7E6'}/>
                </div>
                <div style={{marginTop : '48px'}}>
                    <StateCard state={200} name={'Hospitals'} src={'state/hospitals.svg'} bgColor={'#FFF2F0'}/>
                    <StateCard state={700} name={'Expert Doctors'} src={'state/expert_doctor.svg'} bgColor={'#EBFAF1'}/>
                </div>
            </div>
        </div>
    )
}

export default State