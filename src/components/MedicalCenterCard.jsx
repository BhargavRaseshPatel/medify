import React, { useEffect, useState } from 'react'
import Button from './ui/Button'
import "swiper/css";
import SelectTime from './SelectTime';
import NavigationButton from './NavigationButton';
import TabList from '@mui/lab/TabList';
import { Box, Tab } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



const MedicalCenterCard = ({ data }) => {
    const [bookVisit, setBookVisit] = useState(false)
    const [tabValue, setTabValue] = React.useState("0");
    const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: 'numeric'
    }));
    const [selectedTime, setSelectedTime] = useState('')

    // Generate next 7 days including today
    const next7Days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return d;
    });

    const handleChange = ( newValue) => {
        const date = new Date();
        const newDate = new Date(date.setDate(date.getDate() + parseInt(newValue)));
        setTabValue(newValue);
        setSelectedDate(newDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: 'numeric'
        }));
    };

    const localStorageStore = () => {
        const localStorageData = Array.isArray(JSON.parse(localStorage.getItem('bookings'))) ? JSON.parse(localStorage.getItem('bookings')) : [];
        data.bookingDate = selectedDate;
        data.bookingTime = selectedTime;

        localStorageData.push(data);
        localStorage.setItem('bookings', JSON.stringify(localStorageData));
    }


    return (
        <div style={{ width: '785px', display: 'flex', backgroundColor: 'white', borderRadius: '15px', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '487px', minWidth: '487px', height: '220px', display: 'flex', alignItems: 'center', marginLeft: "24px" }}>
                    <img src='medicalcenter.svg' style={{ width: '140px', height: "140px" }} />

                    <div style={{ height: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '24px', gap: '18px', marginTop: '24px' }}>
                        <p style={{ color: '#14BEF0', fontSize: '20px', whiteSpace: 'nowrap' }}>{data['Hospital Name'].toLowerCase()
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}</p>
                        <div>
                            <p style={{ fontWeight: 'bolder' }}>{data['State']}, {data['City'].charAt(0) + data['City'].slice(1).toLowerCase()}</p>
                            <p style={{ color: '#414146', fontSize: '14px' }}>Smilessence Center for Advanced Dentistry + 1 more</p>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <p style={{ color: '#02A401', fontWeight: 'bolder', fontSize: '14px' }}>FREE</p>
                            <p style={{ color: '#414146' }}><span style={{ marginLeft: '8px', textDecoration: 'line-through' }}> ₹500</span> Consultation fee at clinic</p>
                        </div>

                        {<div style={{ backgroundColor: '#00A500', color: 'white', width: '44px', height: '22px', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', visibility: bookVisit ? 'hidden' : 'visible' }}>
                            <img src='thumbsUp.svg' />{data['Hospital overall rating']}
                        </div>
                        }
                    </div>

                </div>
                <div style={{ width: '236px', height: '220px', margin: '24px', position: 'relative' }}>
                    <div style={{ position: 'absolute', bottom: '0px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: "#01A400", textAlign: 'center' }}>Available Today</p>
                        <div style={{ marginBottom: '16px', marginTop: '8px' }}>
                            <Button name={bookVisit ? 'Hide Booking Center' : 'Book FREE Center Visit'} width={'100%'} onClick={() => setBookVisit(!bookVisit)} />
                        </div>
                    </div>
                </div>
            </div>

            {bookVisit && (
                <div
                    style={{
                        display: "flex",
                        maxWidth: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        position: 'relative'
                    }}>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        style={{ height: '100px', display : 'flex', justifyContent : 'center' }}
                        modules={[Navigation, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                            {next7Days.map((date, index) => {
                                const label = index === 0 ? "Today" : index === 1 ? "Tomorrow" : date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" });
                                return (
                                    <SwiperSlide key={index} style={{width : '200px'}}>
                                        <div style={{ borderBottom: `1px solid ${tabValue == index ? '#2AA7FF' : '#F0F0F5' }`, width: '100%', padding: '4px' }} onClick={() => {handleChange(index); setTabValue(index); console.log('click') }}>
                                            {label}
                                            <p style={{ color: '#01A400', fontSize: '12px', marginTop: '8px' }}>10 Slots Available</p>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        <NavigationButton />
                    </Swiper>


                    <div style={{}}>
                        <SelectTime selectedTime={(time) => { setSelectedTime(time); localStorageStore() }} time={selectedTime} />
                    </div>


                </div>
            )}

        </div>

    )
}

export default MedicalCenterCard