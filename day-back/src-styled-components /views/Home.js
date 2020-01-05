import React, { Component } from 'react'
// import RouterView from '../router/index'
// import { Link } from 'react-router-dom'
import store from '../store/index'
// import data from '../mock/data.json'
import styled from 'styled-components'
import axios from 'axios'

const CartDiv = styled.div`
   width: 100vw;
`;
const ItemDiv = styled.div`
    display:flex;
    margin:10px;
`;
const Count = styled.div`
  flex:6;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const SpanDiv = styled.span`
  margin:5px;
  display:inline-block;
  width:60px;
  height:30px;
  background:#ccc;
  font-size: 25px;
  text-align:center;
  line-height:30px;
  border-radius: 4px;
`;
const ImgDiv = styled.div`
  flex:4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoodsImg = styled.img`
  width: 100px;
  height:100px;
  border-radius: 50%;
`;

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.fn = store.subscribe(() => this.bindStoreEvent())
    // console.log(this.fn, 'fn')
  }

  render() {
    return (
      <CartDiv>
       {/* <Link to="/home/tab1">tab1页面</Link> |
       <Link to="/home/tab2">tab2页面</Link>  <br/> 
       <RouterView {...this.props} routes={this.props.routes}/> */}
        {
          this.state.list.map(item => {
            return (
              <ItemDiv key={item.id}>
                <ImgDiv>
                  <GoodsImg src={item.img} onClick={ () => { this.handleClick(item) } } />
                  {/* <img src={item.img} onClick={ () => { this.handleClick(item) } } alt=""/> */}
                </ImgDiv>
                <Count>
                  <SpanDiv>-</SpanDiv>
                  <SpanDiv>{item.count}</SpanDiv>
                  <SpanDiv>+</SpanDiv>
                </Count>
              </ItemDiv>
            )
          })
        }
      </CartDiv>
    )
  }
  handleClick = (item) => {
    console.log(this.props, 'props---')
    const action = {
      type: 'add_cart_item',
      item
    }
    console.log(action, 'action')
    store.dispatch(action)
  }

  componentDidMount() {

    axios.get('/api/list').then(res => {
      console.log(res.data)
      const movieData = res.data
      const action = {
        type: 'init_movie_list',
        movieData
      }
      store.dispatch(action)
    })
    

  }
  componentWillUnmount() {
    this.fn()
  }

  bindStoreEvent = () => {
    this.setState(store.getState())
  }
}

