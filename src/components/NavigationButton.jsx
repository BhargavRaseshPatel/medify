import React from 'react'
import { useSwiper } from 'swiper/react'

const NavigationButton = () => {
    const swiper = useSwiper()
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width : '100%', position: 'absolute', zIndex : '1', top:'0px' }}>
            <div>
                <img src='navigation/left-button.svg' onClick={() => swiper.slidePrev()} />
            </div>

            <div>
                <img src='navigation/right-button.svg' onClick={() => swiper.slideNext()} />
            </div>
        </div>
    )
}

export default NavigationButton