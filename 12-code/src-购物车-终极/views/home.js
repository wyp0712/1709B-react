import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookList from '../components/bookList'

import { 
        getInitCartList,
        toCartFn 
      } from '../store/actionCreator'

const IconBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.push('/search') } }>back</div>
}

class BookStore extends Component {
  render() {
    const { cartData, toCart } = this.props;
    return (
      <div className="book-store">
        <IconBox {...this.props}></IconBox>
        <BookList
          cartData={cartData}
          addEvent = {(item) => toCart(item) }
        />
      </div>
    )
  }

  componentDidMount() {
    const { getBookListData } = this.props;
    getBookListData()
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookListData() {
      const action = getInitCartList()
      dispatch(action)
    },
    // 加入购物车函数
    toCart(item) {
      console.log(item, 'index')
      const action = toCartFn(item)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore)
