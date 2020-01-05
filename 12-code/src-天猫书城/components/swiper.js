import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import '../mock/index'

import Swiper from 'swiper'
import 'swiper/css/swiper.css'

class SwiperCom extends Component {
  render() {
    const { carouselData } = this.props
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
             {
               carouselData.map(item => {
                 return (
                   <div key={item.id} className="swiper-slide">
                     <img src={item.img} alt=''/>
                   </div>
                 )
               })
             }
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { getCarouselData } = this.props
    getCarouselData()
  }
}

const mapStateToProps = (state) => {
  return {
    carouselData: state.carouselData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCarouselData() {
      axios.get('/api/carousel').then(res => {
        const data = res.data
        const action = {
          type: 'init_carousel_data',
          data
        }
        dispatch(action)
        new Swiper('.swiper-container', {})
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SwiperCom)
