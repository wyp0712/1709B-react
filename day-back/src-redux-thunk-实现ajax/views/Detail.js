import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import store from '../store/index'
import styled from 'styled-components'
import axios from 'axios'
import { getDetailShow } from '../store/actionCreator'

const BackDiv = styled.div`
  width: 35px;
  height: 35px;
  background: skyblue;
  text-align:center;
  line-height: 35px;
  border-radius:50%;
`;

export default class Detail extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {
      detaileItem: []
    }
  }

  render() {
    return (
      <div>
        详情
        <BackDiv onClick={ () => { this.props.history.go(-1) } }>back</BackDiv>
        {
          this.state.detaileItem.map((item, index) => {
            return <div key={item.id}>
              <img src={item.img}/>
              {item.title}
            </div>
          })
        }
      </div>
    )
  }

  getDetailItem = () => {

    axios.get('/api/detail', {
      params: {
        id: this.props.match.params.id
      }
    }).then(res => {
      console.log(res.data, 'res')
      const data = res.data;
      this.setState({
        detaileItem: data
      })
    })
  }

  componentDidMount() {
    this.getDetailItem()
    // 提交一个action让app.js中头和尾隐藏
    const isShowHeader = false
    const action = getDetailShow(isShowHeader)
    store.dispatch(action)
  }

  componentWillUnmount() {
    const isShowHeader = true
    const action = getDetailShow(isShowHeader)
    store.dispatch(action)
  }
}
