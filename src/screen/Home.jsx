import Card from "../components/HomeComponents/Card"
import HomeSearch from "../components/HomeComponents/HomeSearch"
import LatestNews from "../components/HomeComponents/LatestNews"
import PatientCaring from "../components/HomeComponents/PatientCaring"
import State from "../components/HomeComponents/State"
import Button from "../components/ui/Button"

const Home = () => {
    const lookingComponents = [{ image: 'doctors.svg', name: 'Doctors' },
    { image: 'labs.svg', name: 'Labs' },
    { image: 'hospitals.svg', name: 'Hospitals' },
    { image: 'medical.svg', name: 'Medical Store' },
    { image: 'ambulance.svg', name: 'Ambulance' }
    ]

    const specialComponents = [{ image: 'special_icon/dentistry.svg', name: 'Dentistry' },
    { image: 'special_icon/primary_care.svg', name: 'Primary Care' },
    { image: 'special_icon/cardiology.svg', name: 'Cardiology' },
    { image: 'special_icon/mri.svg', name: 'MRI Resonance' },
    { image: 'special_icon/blood_test.svg', name: 'Blood Test' },
    { image: 'special_icon/piscologist.svg', name: 'Piscologist' },
    { image: 'special_icon/laboratory.svg', name: 'Laboratory' },
    { image: 'special_icon/x-ray.svg', name: 'X-Ray' },
    ]

    return (
        <div>
            <div style={{ display: 'flex', padding: '128px', backgroundColor: '#E7F0FF' }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '30px', marginBottom: '16px' }}>Skip the travel! Find Online</p>
                    <p style={{ fontWeight: 'bolder', fontSize: '55px', marginBottom: '16px' }}>
                        Medical <span style={{ color: '#2AA8FF' }}>Centers</span>
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '16px' }}>
                        Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                    </p>

                    <Button name={'Find Centers'} />
                </div>
                <div style={{ width: '100%', marginTop: '-100px' }}>
                    <img src="homeimage.svg" />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                    marginTop: '-400px', width: '1170px', height: '400px', display: 'flex', justifyContent: 'center',
                    flexDirection: 'column', backgroundColor: 'white', maxWidth: 'none', zIndex: 2, borderRadius: "15px",
                }}>
                    <HomeSearch />

                    <p style={{ textAlign: 'center', fontSize: "20px" }}>You may be looking for</p>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "24px", gap: '16px' }}>
                        {lookingComponents.map((data, key) => (
                            <Card key={key} image={data.image} name={data.name} bgColor={'#FAFBFE'} />
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ height: '600px', backgroundColor: '#E7F0FF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontSize: '48px', textAlign: 'center', marginBottom: '25px' }}>Find By Specialisation</p>

                <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                    {specialComponents.map((data, index) => (
                        <Card image={data.image} key={index} name={data.name} />
                    ))}
                </div>

                <div style={{ marginTop: '25px' }}>
                    <Button name={'View All'} />
                </div>
            </div>

            <div style={{ height: '600px', backgroundColor: '#E7F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PatientCaring />
            </div>

            <div style={{ height: '600px', backgroundColor: '#E8F1FF78', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LatestNews />
            </div>

            <div style={{
                height: '800px', backgroundColor: '#E7F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                paddingLeft: '128px', paddingRight: '128px', padding: 'auto'
            }}>
                <State />
            </div>
        </div>
    )
}

export default Home