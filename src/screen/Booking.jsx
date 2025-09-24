import { useEffect, useState } from 'react';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';

const Booking = () => {

  const [bookingData, setBookingData] = useState([])

  useEffect(() => {
    const data = (JSON.parse(localStorage.getItem('bookings')))
    setBookingData(data)
  }, [])

  const handleChangeText = (e) => {
    const data = (JSON.parse(localStorage.getItem('bookings')))
    const searchedData = data.filter((data) => data['Hospital Name'].toLowerCase().includes(e.target.value))
    setBookingData(searchedData)
  }

  return (
    <div style={{ position: "relative" }}>
      <div style={{ backgroundColor: '#2AA7FF', height: "110px", display: 'flex', alignItems: 'center', paddingLeft: '80px' }}>
        <h1 style={{ color: 'white', fontSize: '40px', width: '400px', textAlign: 'center'}}>My Bookings</h1>
      </div>

      <div style={{
        position: 'absolute', minWidth: '780px', height: '104px', top: '48px', display: 'flex', right: '80px',
        justifyContent: 'center', alignItems: 'center', gap: '48px', backgroundColor: 'white', borderRadius: '18px'
      }}>
        <InputField placeholder={'Search By Hospital'} width={'545px'} onChange={handleChangeText} />
        <Button name={'Search'} />
      </div>
      <div style={{ backgroundColor: '#EFF5FE', display: 'flex', flexDirection: 'column', gap: '18px', paddingBottom: '128px' }}>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: "78px" }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {bookingData?.map((data, index) => (
              <div key={index} style={{ width: '785px', display: 'flex', backgroundColor: 'white', borderRadius: '15px', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: '487px', minWidth: '487px', height: '220px', display: 'flex', alignItems: 'center', marginLeft: "24px" }}>
                    <img src='medicalcenter.svg' style={{ width: '140px', height: "140px" }} />

                    <div style={{ height: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '24px', gap: '18px', marginTop: '24px' }}>
                      <h3 style={{ color: '#14BEF0', fontSize: '20px', whiteSpace: 'nowrap' }}>{data['Hospital Name'].toLowerCase()
                        .split(' ')
                        .map(word => word.toLowerCase())
                        .join(' ')}</h3>
                      <div>
                        <p style={{ fontWeight: 'bolder' }}>{data['State']}, {data['City'].charAt(0) + data['City'].slice(1).toLowerCase()}</p>
                        <p style={{ color: '#414146', fontSize: '14px' }}>Smilessence Center for Advanced Dentistry + 1 more</p>
                      </div>

                      <div style={{ display: 'flex' }}>
                        <p style={{ color: '#02A401', fontWeight: 'bolder', fontSize: '14px' }}>FREE</p>
                        <p style={{ color: '#414146' }}><span style={{ marginLeft: '8px', textDecoration: 'line-through' }}> ₹500</span> Consultation fee at clinic</p>
                      </div>

                      {<div style={{ backgroundColor: '#00A500', color: 'white', width: '44px', height: '22px', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
                        <img src='thumbsUp.svg' />{data['Hospital overall rating']}
                      </div>
                      }
                    </div>
                  </div>

                  <div style={{ width: '276px', height: '220px', margin: '24px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '0px', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '84px', border: "1px solid #2AA7FF", color: "#2AA7FF", display: 'flex', justifyContent: 'center', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' }}>
                        <p>{data.bookingTime}</p>
                      </div>
                      <div style={{ width: '168px', border: "1px solid #00A500", color: "#00A500", display: 'flex', justifyContent: 'center', marginLeft: '8px', paddingTop: '4px', paddingBottom: '4px', borderRadius: '4px' }}>
                        <p>{data.bookingDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            }
          </div>
          <img src='side-image.svg' width={'363px'} height={'268px'} />
        </div>
      </div>
    </div>
  )
}
export default Booking;