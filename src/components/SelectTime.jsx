import React, { useState } from 'react';

const SelectTime = ({ selectedTime, time }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [tempSelectedTime, setTempSelectedTime] = useState(null);

    const availableTime = [
        { gretting: 'Morning', times: ['11:30 AM'] },
        { gretting: 'Afternoon', times: ['12:00 PM', '12:30 PM', '01:30 PM', '02:00PM', '02:30PM'] },
        { gretting: 'Evening', times: ['06:00 PM', '06:30 PM', '07:00 PM', '07:30PM'] }
    ];

    const handleTimeClick = (Itime) => {
        setTempSelectedTime(Itime);
        setIsDialogOpen(true);
    };

    const confirmTimeSelection = () => {
        selectedTime(tempSelectedTime);
        setIsDialogOpen(false);
    };

    const cancelTimeSelection = () => {
        setTempSelectedTime(null);
        setIsDialogOpen(false);
    };

    return (
        <div style={{ width: '767px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {availableTime.map((data, index) => (
                <div style={{ display: 'flex', minHeight: '73px', alignItems: 'center' }} key={index}>
                    <p style={{ width: '140px', display: 'flex', justifyContent: 'center' }}>{data.gretting}</p>
                    <div style={{ width: '624px', display: 'flex' }}>
                        {data.times.map((Itime, index) => (
                            <div
                                onClick={() => handleTimeClick(Itime)}
                                key={index}
                                style={{ width: '84px', height: '32px', background: `${time === Itime ? '#2AA7FF' : 'white'}`, color: `${time === Itime ? 'white' : '#2AA7FF'}`, border: `1px solid ${time === Itime ? 'white' : '#2AA7FF'}`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '24px', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                <p style={{ fontSize: '14px' }}>{Itime}</p>
                            </div>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}

            {isDialogOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex : 500 }}>
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                        <p>Do you really want to select {tempSelectedTime}?</p>
                        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
                            <button onClick={confirmTimeSelection} style={{ padding: '10px 20px', background: '#2AA7FF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Confirm</button>
                            <button onClick={cancelTimeSelection} style={{ padding: '10px 20px', background: 'gray', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectTime;
