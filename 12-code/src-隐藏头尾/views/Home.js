import React, { Component,Fragment } from 'react'
import store from '../store/index'
// import { Button } from 'antd-mobile';
import axios from 'axios'
import { 
  HomeDiv,
  GoodsImg,
  ImgDiv,
  FontDiv,
  SpanDiv
} from './styleHome'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    this.fn = store.subscribe(() => this.storeEvent())
    // console.log(this.fn, 'fn---')
  }

  storeEvent = () => {
    this.setState(store.getState())
  }

  // 卸载生命周期
  componentWillUnmount() {
    this.fn() // 卸载监听订阅函数
  }

  render() {
    // 一旦数据更新，就会重新执行render()
    console.log(this.state, 'state----state')
    return (
      <HomeDiv>
        { this.state.list.map((item, index) => {
            return (
            <GoodsImg key={item.id}>
              <ImgDiv className="img">
                <img onClick={ () => this.handleDetailClick(item) } src={item.img} alt=''/>
              </ImgDiv>
              <FontDiv className="font">
                { item.count ? (
                  <Fragment>
                    <SpanDiv onClick={ () => this.handleRemoveEvent(index) } >-</SpanDiv>
                    <SpanDiv>{item.count}</SpanDiv>
                  </Fragment>
                ): null }
                <SpanDiv onClick={ () => this.hanleAddEvent(index) }>+</SpanDiv>
              </FontDiv>
            </GoodsImg>
            )
        }) }
      </HomeDiv>
    )
  }

  handleDetailClick = (item) => {
    this.props.history.push(`/detail/${item.id}&isShow=false`)
    // this.props.history.push({
    //   pathname: '/cart',
    //   params: {
    //     id: item.id
    //   }
    // })
  }

  // 
  getTotalCount = () => {
    return this.state.list.reduce((num, item) => {
      return num + item.count
    }, 0)
  }

  componentDidMount() {
    // action: store.dispatch  subscribe
    // 判断是否有数据，如有数据就不再请求数据了
    if(!this.state.list.length) {
      axios.get('/api/list').then(res => {
        const data = res.data
        const action = {
          type: 'init_cart_list',
          data
        }
        store.dispatch(action)
      })
    }
  }

  hanleAddEvent = (index) => {
    const action = {
      type: 'add_cart_item',
      index
    }

    store.dispatch(action)

  }

  handleRemoveEvent = (index) => {
    const action = {
      type: 'remove_cart_item',
      index
    }

    store.dispatch(action)

  }






}
