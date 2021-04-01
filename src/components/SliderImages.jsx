import React from 'react'

import SimpleCarousel from 'simple-react-carousel';
// import Carousel from 'react-elastic-carousel';
import { sliderDatas } from "../assets/data";

function SliderImages () {

    return (

        <SimpleCarousel autoPlay={true} itemFit="cover">

            {sliderDatas.map( ( sliderData, i ) => {
                return (

                    <div style={{ backgroundColor: "rgb(238, 236, 192)" }} key={i}>

                        <img alt="alternate text" src={sliderData.sliderImg} />
                    </div >
                )
            } )

            }

        </SimpleCarousel >

    )
}

export default SliderImages
