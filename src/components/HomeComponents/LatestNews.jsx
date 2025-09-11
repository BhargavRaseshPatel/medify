import React from 'react'

const LatestNews = () => {
  return (
    <div>
        <p style={{color : '#2AA7FF', fontSize : '16px', textAlign :'center'}}>Blog & News</p>
        <p style={{fontSize : '48px', textAlign : 'center', marginBottom : '25px'}}>Read Our Latest News</p>

        <div style={{display : 'grid' , gridTemplateColumns : '1fr 1fr 1fr', gap :'16px'}}>
            <div style={{border : '1px solid lightgray', width: '363px', borderRadius : '8px'}}>
                <img src="latest_news.svg" alt="" />

                <div style={{padding : '12px', display :'flex', flexDirection:'column', gap :"8px"}}>
                    <p style={{color: 'gray'}}>Medical | March 31, 2022</p>

                    <p style={{wordWrap : 'break-word'}}>6 Tips To Protect Your Mental Health When You’re Sick</p>

                    <div style={{display : 'flex' , alignItems : 'center', gap :'16px'}}>
                        <img src='lady_image.svg'/>
                        <p>Rebecca Lee</p>
                    </div>
                </div>
            </div>


            <div style={{border : '1px solid lightgray', width: '363px', borderRadius : '8px'}}>
                <img src="latest_news.svg" alt="" />

                <div style={{padding : '12px', display :'flex', flexDirection:'column', gap :"8px"}}>
                    <p style={{color: 'gray'}}>Medical | March 31, 2022</p>

                    <p style={{wordWrap : 'break-word'}}>6 Tips To Protect Your Mental Health When You’re Sick</p>

                    <div style={{display : 'flex' , alignItems : 'center', gap :'16px'}}>
                        <img src='lady_image.svg'/>
                        <p>Rebecca Lee</p>
                    </div>
                </div>
            </div>


            <div style={{border : '1px solid lightgray', width: '363px', borderRadius : '8px'}}>
                <img src="latest_news.svg" alt="" />

                <div style={{padding : '12px', display :'flex', flexDirection:'column', gap :"8px"}}>
                    <p style={{color: 'gray'}}>Medical | March 31, 2022</p>

                    <p style={{wordWrap : 'break-word'}}>6 Tips To Protect Your Mental Health When You’re Sick</p>

                    <div style={{display : 'flex' , alignItems : 'center', gap :'16px'}}>
                        <img src='lady_image.svg'/>
                        <p>Rebecca Lee</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews