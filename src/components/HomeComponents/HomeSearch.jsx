import { FaSearch } from "react-icons/fa";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { InputAdornment, MenuItem, Select } from "@mui/material";

const HomeSearch = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCities, setSelectedCities] = useState("");
  const [medicalCenter, setMedicalCenter] = useState([]);

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

  const searchMedicalCenters = async () => {
    try {
      const response = await fetch(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCities}`
      );
      const data = await response.json();
      setMedicalCenter(data);
    } catch (error) {
      console.error("Error fetching medical centers:", error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchMedicalCenters(); // ✅ ensures request happens
      }}
    >
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
        {/* ✅ Cypress expects div#state */}
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

        {/* ✅ Cypress expects div#city */}
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
        <Button id={"searchBtn"} name={"Search"} method="post" />
      </div>

      {/* ✅ Cypress expects an <h1> with result text */}
      {medicalCenter.length > 0 && (
        <h1>{`${medicalCenter.length} medical centers available in ${selectedCities.toLowerCase()}`}</h1>
      )}
    </form>
  );
};

export default HomeSearch;
