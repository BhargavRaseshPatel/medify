import React, { useEffect, useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import Button from '../components/ui/Button';
import MedicalCenterCard from '../components/MedicalCenterCard';

const FindDoctor = () => {
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [selectedState, setSelectedState] = useState('')
    const [selectedCities, setSelectedCities] = useState('')
    const [medicalCenter, setMedicalCenter] = useState([])

    useEffect(() => {
        const fetchStates = async () => {
            const states = await (await fetch('https://meddata-backend.onrender.com/states')).json();
            setStates(states);
        };
        fetchStates();
    })

    const handleState = (event) => {
        const fetchCities = async () => {
            const cities = await (await fetch(`https://meddata-backend.onrender.com/cities/${event.target.value}`)).json();
            setCities(cities);
        };
        setSelectedState(event.target.value);
        fetchCities();
    }

    const handleCities = (event) => {
        setSelectedCities(event.target.value)
    }

    const searchMedicalCenters = () => {
        const fetchMedicalCenters = async () => {
            try {
                const response = await fetch(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCities}`);
                const data = await response.json();
                setMedicalCenter(data);
            } catch (error) {
                console.error("Error fetching medical centers:", error);
            }
        };
        fetchMedicalCenters();
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", backgroundColor: '#E7F0FF' }}>
            <div style={{ width: '1166px', display: 'flex', gap: '24px', border: '1px solid #F0F0F0', borderRadius: '15px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: '48px' }}>
                <div style={{ height: '111px', display: 'flex', alignItems: 'center', gap: '24px', color: '#9CA3AF' }}>
                    <div style={{ width: "326px", height: '50px', border: '1px solid #F0F0F0', backgroundColor: '#FAFBFE', padding: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <div size={{ width: "18px", height: '18px', padding: '4px' }}>
                            <IoLocationOutline style={{ fontSize: '32px' }} />
                        </div>

                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginLeft: '8px' }} id='state'>
                            <select style={{ width: "100%", border: '0px', fontSize: '14px', color: '#ABB6C7' }} onChange={handleState} id='state'>
                                {states.map((data, index) => (
                                    <option key={index}>{data}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div style={{ height: '111px', display: 'flex', alignItems: 'center', gap: '24px', color: '#9CA3AF' }} id='city'>
                    <div style={{ width: "522px", height: '50px', border: '1px solid #F0F0F0', backgroundColor: '#FAFBFE', padding: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <div size={{ width: "18px", height: '18px', padding: '4px' }}>
                            <IoLocationOutline style={{ fontSize: '32px' }} />
                        </div>

                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                            <select style={{ width: "100%", border: '0px', fontSize: '14px', color: '#ABB6C7' }} id='city' onChange={handleCities}>
                                {cities.map((data, index) => (
                                    <option key={index}>{data}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <Button id={'searchBtn'} name={'Search'} onClick={searchMedicalCenters} />

            </div >

            <div>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'flex-start', gap: '24px', marginTop: '48px' }}>
                    {medicalCenter.length > 0 && <p style={{ fontSize: '24px' }}>{medicalCenter?.length} medical centers available in {selectedCities.charAt(0).toUpperCase() + selectedCities.slice(1).toLowerCase()}</p>}

                    <div style={{ display: 'flex', gap: '16px' }}>
                        {medicalCenter.length > 0 &&
                            <div style={{display : 'flex',gap: '24px' }}>
                                <div style={{ display: 'flex', flexDirection : 'column',gap: '24px'  }}>
                                    {medicalCenter && (medicalCenter.map((data, index) => (
                                        (<MedicalCenterCard key={index} data={data} />)
                                    )))}
                                </div>
                                <img src='side-image.svg' width={'363px'} height={'268px'} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindDoctor