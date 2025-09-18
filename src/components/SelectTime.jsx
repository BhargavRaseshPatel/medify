import React from 'react'

const SelectTime = ({ selectedTime, time }) => {
    const availableTime = [
        {
            gretting: 'Morning',
            times: ['11:30 AM']
        }
        , {
            gretting: 'Afternoon',
            times: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00PM', '02:30PM']
        }, {
            gretting: 'Evening',
            times: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30PM']
        }
    ]
    return (
        <div style={{ width: '767px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100px' }}>
            {availableTime.map((data, index) => (
                <div style={{ display: 'flex', minHeight: '73px', display: 'flex', alignItems: 'center' }} key={index}>
                    <p style={{ width: '140px', display: 'flex', justifyContent: 'center' }}>{data.gretting}</p>
                    <div style={{ width: '624px', display: 'flex', }}>
                        {
                            data.times.map((Itime, index) => (
                                <div onClick={() => selectedTime(Itime)} key={index} style={{
                                    width: '84px', height: '32px', background: `${time == Itime ? '#2AA7FF' : 'white'}`, color: `${time == Itime ? 'white' : '#2AA7FF'}`, border: `1px solid ${time == Itime ? 'white' : '#2AA7FF'}`,
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '24px', borderRadius: '4px',
                                }}>
                                    <p style={{ fontSize: '14px' }} >{Itime}</p></div>
                            ))
                        }
                    </div>
                    <hr />
                </div>
            ))

            }
        </div>
    )
}

export default SelectTime