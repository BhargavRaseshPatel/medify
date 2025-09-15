import React from 'react'

const SelectTime = () => {
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
        <div style={{ width: '767px', display: 'flex', flexDirection : 'column', justifyContent: 'center' }}>
            {availableTime.map((data, index) => (
                <div style={{display : 'flex'}}>
                    <p style={{ width: '140px', display: 'flex', justifyContent: 'center' }}>{data.gretting}</p>
                    <div style={{ width: '624px', display : 'flex' }}>
                        {
                            data.times.map((time, index) => (
                                <p style={{width : '84px', height : '32px'}}>{time}</p>
                            ))
                        }
                    </div>
                </div>

            ))
            }
        </div>
    )
}

export default SelectTime