import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/index'
export default class Detail extends Component {
  static propTypes = {

  }

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
    console.log(this.props, 'props')
    let isShow = true
    const action = {
      type: 'is_show_header',
      isShow
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        详情
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props, 'props')
    let isShow = false
    const action = {
      type: 'is_show_header',
      isShow
    }
    store.dispatch(action)
  }

}
