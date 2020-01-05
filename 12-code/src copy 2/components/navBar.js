import React, { Component } from 'react'
import Dialog from './dialog'
import { connect } from 'react-redux'
import axios from './node_modules/axios'
import { PickerView } from './node_modules/antd-mobile';
import { province } from './dataCity'
import BScroll from 'better-scroll'
// console.log(province, 'province')
class NavBar extends Component {
  state = {
    navList: [
      {
        name: '区域',
        isClick: false
      },
      {
        name: '价格',
        isClick: false
      },
      {
        name: '房型',
        isClick: false
      },
      {
        name: '更多',
        isClick: false
      },
      {
        name: '排序',
        isClick: false
      }
    ],
    tabIndex: 1,
    flag: false, // 控制dialog
    // houseArr: [],s
    value: null,
    scroll: null,
  }

  render() {
    return (
      <div className="app-nav">
         {/* 弹出框  */}
        {
          this.props.closeFlag && (<Dialog
           closeMask={ () => this.props.bindClose() }
          >
           { this.props.tabIndex !== 0 &&
           this.props.houseArr[this.props.tabIndex].map((item, index) => {
             return  <div 
             className='spans'
             onClick={ () => this.props.handleFilterData(item)} 
             key={index}>{item}</div>
           }) }

           { this.props.tabIndex === 0 &&  <PickerView
              data={province}
              value={this.state.value}
              onChange={this.onChange}
              onScrollChange={this.onScrollChange}
            /> }
          </Dialog>)
        }

        <div className="nav-tag">
          <div className="nav-tag-content">
              {
               this.props.navList.map((item, index) => {
                 return <span key={index}
                  className={ item.isClick ? 'active': '' }
                  onClick={ () => this.props.handleClick(index, this.props.closeFlag)}
                 > {item.name} </span>
               })
              }
          </div>
        </div>
      </div>
    )
  }

  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
    // const num1 = Number(value[0]) - 1
    // const num2 = Number(value[1].split('-')[1]) - 1;
    // const num3 = value[2] && Number(value[2].split('-')[2]) - 1
  }

  onScrollChange = (value) => {}

  componentDidMount() {
    const { getHouseArr,closeFlag } = this.props;
    getHouseArr()
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
    houseArr: state.houseArr,
    closeFlag: state.closeFlag,
    navList: state.navList,
    tabIndex: state.tabIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 获取房子数据
     getHouseArr() {
      axios.get('/api/house').then(res => {
        const data = res.data
        const action = {
          type: 'init_house_data',
          data
        }
        dispatch(action)
      })
    },
     // 过滤数据
    handleFilterData(item) {
      const action = {
        type: 'filter_data',
        item
      }
      dispatch(action)
    },
    // 点击mask关闭弹出框
    bindClose() {
      const action = {
        type: 'close_dialog',
        flag: false
      }
      dispatch(action)
    },
    // 点击tab切换数据
    handleClick(index, closeFlag) {
      const action = {
        type: 'change_tabindex',
        index
      }
      dispatch(action)
      console.log(closeFlag, '关闭弹出框')
      // 通过弹出框的显示隐藏来确定 当前的better-scroll是否需要实例化
      if (!closeFlag) {
        // 定时器，异步获取dom，保证dom结构先存在才去实例化
        setTimeout(() => {
          new BScroll('.tip', {
            click: true
          })
        }, 200);
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
