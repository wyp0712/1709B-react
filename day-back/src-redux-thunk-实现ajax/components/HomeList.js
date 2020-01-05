import React, { Component,Fragment } from 'react'
import { 
  HomeDiv,
  GoodsImg,
  FontDiv,
  SpanDiv
} from '../views/styleHome'

export default class HomeList extends Component {
  render() {
    return <div>homelist</div>
    const { list } = this.props;
    // console.log(list, 'list------list')
    // return (
      //   <HomeDiv>
      //     { console.log(list.inland, 'land') }
      //     { list.inland && list.inland.map((item, index) => {
      //         console.log(item, 'item----item')
      //     return <div key={item.id}>{item.pro}</div>
      //     }) }
      // </HomeDiv>
    // )
  }
}
