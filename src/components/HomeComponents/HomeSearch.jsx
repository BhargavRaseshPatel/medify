import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { InputAdornment, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const HomeSearch = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCities, setSelectedCities] = useState("");

    useEffect(() => {
        const fetchStates = async () => {
            const states = await (await fetch("https://meddata-backend.onrender.com/states")).json();
            setStates(states);
        };
        fetchStates();
    }, []);

    const handleState = (event) => {
        const fetchCities = async () => {
            const cities = await (
                await fetch(`https://meddata-backend.onrender.com/cities/${event.target.value}`)
            ).json();
            setCities(cities);
        };
        setSelectedState(event.target.value);
        fetchCities();
    };

    const handleCities = (event) => {
        setSelectedCities(event.target.value);
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/find-doctor?state=${selectedState}&city=${selectedCities}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div
                style={{
                    width: "1166px",
                    display: "flex",
                    gap: "24px",
                    border: "1px solid #F0F0F0",
                    borderRadius: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    marginTop: "48px",
                }}
            >
                <div id="state" style={{ height: "111px", display: "flex", alignItems: "center" }}>
                    <Select
                        value={selectedState}
                        onChange={handleState}
                        displayEmpty
                        sx={{ minWidth: 200 }}
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

                <div id="city" style={{ height: "111px", display: "flex", alignItems: "center" }}>
                    <Select
                        value={selectedCities}
                        onChange={handleCities}
                        displayEmpty
                        sx={{ minWidth: 200 }}
                        startAdornment={
                            <InputAdornment position="start">
                                <IoLocationOutline style={{ fontSize: "20px" }} />
                            </InputAdornment>
                        }
                    >
                        <MenuItem disabled value="">
                            Select City
                        </MenuItem>
                        {cities.map((city, index) => (
                            <MenuItem key={index} value={city}>
                                {city}
                            </MenuItem>
                        ))}
                    </Select>
                </div>

                {/* ✅ Cypress expects id="searchBtn" */}
                <Button id="searchBtn" name="Search" method="post" />
            </div>
        </form>
    );
};

export default HomeSearch;
