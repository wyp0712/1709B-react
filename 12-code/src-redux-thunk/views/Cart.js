import React, { Component,Fragment } from 'react'
import store from '../store/index'
import TotalNum from '../components/TotalPrice'
import { 
  HomeDiv,
  GoodsImg,
  ImgDiv,
  FontDiv,
  SpanDiv,
  BackDiv
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

  render() {
    console.log(this.props, 'props----')
    // 一旦数据更新，就会重新执行render()
    console.log('父组件的render', 'state----state')
    return (
      <HomeDiv>
        <BackDiv onClick={ () => this.handleBackClick() } >back</BackDiv>
        { this.state.list.map((item, index) => {
           return item.count ? (
             <Fragment key={item.id}>
                <GoodsImg key={item.id}>
                  <ImgDiv className="img">
                    <img src={item.img} alt=''/>
                  </ImgDiv>
                  <FontDiv className="font">
                    <SpanDiv onClick={ () => this.handleRemoveEvent(index) } >-</SpanDiv>
                    <SpanDiv>{item.count}</SpanDiv>
                    <SpanDiv onClick={ () => this.hanleAddEvent(index) }>+</SpanDiv>
                  </FontDiv>
                </GoodsImg>
             </Fragment>
           ) : null;
        }) }
        {/* 总价组件 */}
        <TotalNum />
      </HomeDiv>
    )
  }

  handleBackClick = () => {
    this.props.history.go(-1)
  }
  
  getTotalCount = () => {
    // console.log('hello world')
    let totalCount = this.state.list.reduce((num, item) => {
      // console.log(item, 'item')
      return num + item.count
    }, 0)
    const action = {
      type: 'total_cart_count',
      totalCount
    }
    store.dispatch(action)
  }

  hanleAddEvent = (index) => {
    const action = {
      type: 'add_cart_item',
      index
    }
    store.dispatch(action)
    this.getTotalCount()
  }

  handleRemoveEvent = (index) => {
    const action = {
      type: 'remove_cart_item',
      index
    }
    store.dispatch(action)
    this.getTotalCount()
  }

  // 卸载生命周期
  componentWillUnmount() {

    this.fn() // 卸载监听订阅函数
  }





}
