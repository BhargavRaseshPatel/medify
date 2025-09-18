import { FaSearch } from "react-icons/fa";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { InputAdornment, MenuItem, Select } from "@mui/material";
import { useNavigate, useRoutes } from "react-router-dom";


const HomeSearch = () => {

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [selectedState, setSelectedState] = useState('')
    const [selectedCities, setSelectedCities] = useState('')
    const [medicalCenter, setMedicalCenter] = useState([])
    // const navigate = useNavigate()

    useEffect(() => {
        const fetchStates = async () => {
            const states = await (await fetch('https://meddata-backend.onrender.com/states')).json();
            setStates(states);
        };
        fetchStates();
    }, [])

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
        // navigate(`find-doctor?state=${selectedState},city=${selectedCities}`)

        fetchMedicalCenters();
    }
    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        navigate(`/find-doctor?state=${selectedState}&city=${selectedCities}`);

    }
    return (
        <form onSubmit={(e) => {

            handleSubmit(e);
        }}>
            <div style={{ width: '1166px', display: 'flex', gap: '24px', border: '1px solid #F0F0F0', borderRadius: '15px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: '48px' }}>

                <div style={{ height: '111px', display: 'flex', alignItems: 'center', gap: '24px', color: '#9CA3AF' }}>
                    <div id="state" style={{ width: "326px", height: '50px', border: '1px solid #F0F0F0', backgroundColor: '#FAFBFE', padding: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        {/* <div size={{ width: "18px", height: '18px', padding: '4px' }}>
                            <IoLocationOutline style={{ fontSize: '32px' }} />
                        </div> */}

                        {/* <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginLeft: '8px' }} id='state'>
                            <select name="home-state" style={{ width: "100%", border: '0px', fontSize: '14px', color: '#ABB6C7' }} onChange={handleState} id='state'>
                                {states.map((data, index) => (
                                    <option key={index}>{data}</option>
                                ))}
                            </select>d
                        </div> */}

                        {/* <Select
                            id="state"
                            value={selectedState}
                            onChange={handleState}
                            displayEmpty
                            sx={{ minWidth: 200 }}
                            // name="state"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IoLocationOutline style={{ fontSize: "20px" }} />
                                </InputAdornment>
                            }
                        >
                            <MenuItem disabled value="">Select State</MenuItem>
                            {states.map((state, index) => (
                                <MenuItem key={index} value={state}>{state}</MenuItem>
                            ))}
                        </Select> */}

                        {/* <Select
                            id="state"
                            value={selectedState}
                            onChange={handleState}
                            displayEmpty
                        >
                            <MenuItem disabled value="">Select State</MenuItem>
                            {states.map((state, index) => (
                                <MenuItem key={index} value={state}>{state}</MenuItem>
                            ))}
                        </Select>

                        <Select
                            id="city"
                            value={selectedCities}
                            onChange={handleCities}
                            displayEmpty
                        >
                            <MenuItem disabled value="">Select City</MenuItem>
                            {cities.map((city, index) => (
                                <MenuItem key={index} value={city}>{city}</MenuItem>
                            ))}
                        </Select> */}


                        <Select
                            
                            value={selectedState}
                            onChange={handleState}
                            displayEmpty
                            sx={{ minWidth: 200 }}
                            name="state"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IoLocationOutline style={{ fontSize: "20px" }} />
                                </InputAdornment>
                            }
                        >
                            <MenuItem disabled value="">
                                Select State
                            </MenuItem>
                            {states.map((state, index) => (
                                <MenuItem key={index} value={state}>
                                    {state}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                <div style={{ height: '111px', display: 'flex', alignItems: 'center', gap: '24px', color: '#9CA3AF' }}>
                    <div id="city" style={{ width: "522px", height: '50px', border: '1px solid #F0F0F0', backgroundColor: '#FAFBFE', padding: '8px', borderRadius: '8px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        {/* <div size={{ width: "18px", height: '18px', padding: '4px' }}>
                            <IoLocationOutline style={{ fontSize: '32px' }} />
                        </div>

                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                            <select name="home-city" style={{ width: "100%", border: '0px', fontSize: '14px', color: '#ABB6C7' }} id='city' onChange={handleCities}>
                                {cities.map((data, index) => (
                                    <option key={index}>{data}</option>
                                ))}
                            </select>
                        </div> */}

                        {/* <Select
                            id="state"
                            value={selectedCities}
                            onChange={handleCities}
                            displayEmpty
                            sx={{ minWidth: 200 }}
                            name="city"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IoLocationOutline style={{ fontSize: "20px" }} />
                                </InputAdornment>
                            }
                        >
                            <MenuItem disabled value="">
                                Select City
                            </MenuItem>
                            {cities.map((state, index) => (
                                <MenuItem key={index} value={state}>
                                    {state}
                                </MenuItem>
                            ))}
                        </Select> */}

                        <Select
                            
                            value={selectedCities}
                            onChange={handleCities}
                            displayEmpty
                            sx={{ minWidth: 200 }}
                            // name="city"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IoLocationOutline style={{ fontSize: "20px" }} />
                                </InputAdornment>
                            }
                        >
                            <MenuItem disabled value="">Select City</MenuItem>
                            {cities.map((city, index) => (
                                <MenuItem key={index} value={city}>{city}</MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                <Button id={'searchBtn'} name={'Search'} method="post" />

            </div >
        </form>
    )
}

export default HomeSearch