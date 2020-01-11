import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import '../../mock/index'
import RightCom from '../../components/Right/index'

class HomeIndex extends Component {
  state = {
    list: ['国内','国际'],
    tabIndex: 0
  }
  render() {
    const { cityData,handleClick } = this.props;
    return (
      <div className='home-index'>
        <div className='nav-tab'>
            {
              this.state.list.map((item, index) => {
                return <span
                className={ this.state.tabIndex === index ? 'active': '' }
                key={index}>{item}</span>
              })
            }
        </div>

        <hr />
          <ul>
            {
              cityData.guonei && cityData.guonei.map((item, index) => {
              return <li 
              key={index}
               onClick={ () => handleClick(item) }
              >{item.pro[0].title}</li>
              })
            }
          </ul>

          <RightCom></RightCom>
      </div>
    )
  }

  componentDidMount() {
    this.props.initCityData()


  }
}

// 获取数据
const mapStateToProps = (state) => {
  // console.log(state.cityData, 'state')
   return {
     cityData: state.cityData
   }
}

// 提交action 行为
const mapActionToProps = (dispatch) => {
   return {
      initCityData() {
        axios.get('/api/city').then(res => {
          // console.log(res, 'res') 
          // 获取到数据 提交给store 
          const action = {
            type: 'init_city_data',
            data: res.data
          }
          dispatch(action)
        })
      },
      handleClick(item) {
        console.log(item.pro[0].children, 'item') 
        const action = {
          type: 'add_to_right',
          data: item.pro[0].children
        }
        dispatch(action)
      }
   }
}

export default connect(mapStateToProps, mapActionToProps)(HomeIndex)
