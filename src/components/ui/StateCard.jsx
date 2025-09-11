import React from 'react'

const StateCard = ({ bgColor, src, state, name }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems : 'center', height: '300px', width: '240px', backgroundColor : 'white', borderRadius : '12px' }}>

            <div style={{ width: '240px', height: '220px', display : 'flex', justifyContent : 'center', flexDirection :'column', alignItems : 'center', gap : '16px' }}>
                <div style={{ width: '100px', height: '100px', backgroundColor: bgColor, borderRadius: '50%', display: 'flex' , alignItems: 'center', justifyContent :'center' }}>
                    <img src={src} />
                </div>
                <p style={{ fontSize: '48px', fontWeight: 'bolder', margin: '10px' }}>{state} +</p>
                <p style={{ fontSize: '18px', color: '#77829D' }}>{name}</p>
            </div>
        </div>
    )
}

export default StateCard