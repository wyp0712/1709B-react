import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default class SwiperCom extends Component {
  render() {
    return (
      <div className='swiper-page swiper-container'>
        <div className='swiper-wrapper'>
         <div className='swiper-slide'>
           1
         </div>
         <div className='swiper-slide'>
           1
         </div>
        </div> 
      </div>
    )
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      
    })
  }
}
