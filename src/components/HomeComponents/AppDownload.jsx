import React from 'react'
import Button from '../ui/Button'

const AppDownload = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '450px', backgroundColor: '#E7F0FF', paddingTop: '48px', overflow :'hidden' }}>

      <div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', marginRight: '200px', zIndex: 2 }}>
          <img src='mobile-body.svg' style={{ position: 'absolute', top: '75px' }} />
          <img src='mobile.svg' style={{ position: 'absolute', right: '7px', top: '111px' }} />
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
          <img src='mobile-body.svg' style={{ position: 'absolute', top: '0px' }} />
          <img src='large-screen.png' width={'284px'} style={{ position: 'absolute', right: '9px', top: '36px' }} />
        </div>
      </div>

      <div style={{ marginRight: '150px', height:"100%", marginLeft: '80px', display: 'flex', flexDirection : 'column', justifyContent : 'center' }}>
        <p style={{ fontSize: '48px', width: '400px', marginBottom: '25px' }}>Download the Medify App</p>
        <p>Get the link to download the app</p>
        
        <div style={{ display: 'flex' , marginTop : '18px' }}>
          <div style={{ width: '391px', height: '49px', display: 'flex', backgroundColor: 'white',borderRadius : '8px' }}>
            <div style={{width : '55px' , height : '47px', display : 'flex' , alignItems : 'center', justifyContent : 'center', borderRight : '1px solid black'}}>
              +91
            </div>
            <input type="text" name="" id="" style={{width : '100%', height : '100%', border : '0px', borderRadius : '8px', paddingLeft : '24px'}} placeholder='Enter phone number' />
          </div>
          <div style={{ width: '150px', display: 'flex', justifyContent: 'flex-end' }}>
            <Button name={'Send SMS'} height={'100%'} fontSize={'16px'}/>
          </div>
        </div>

        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems :'center' }}>
          <img src='play_store.svg' width={'224px'} height={'70px'} />
          <img src='app_store.svg' width={'224px'} height={'70px'} style={{ marginLeft: '24px' }} />
        </div>
      </div>
    </div>
  )
}

export default AppDownload