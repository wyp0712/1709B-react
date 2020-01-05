import React, { Component } from 'react'
import SwiperComponent from '../components/swiper'
import BookList from '../components/bookList'
import { connect } from 'react-redux'

import axios from 'axios'
import '../mock/index'

import { getInitCartList,toCartFn } from '../store/actionCreator'

const IconBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.push('/search') } }>back</div>
}

class BookStore extends Component {
  render() {
    const { bookData, bindAddEvent } = this.props
    return (
      <div className="book-store">
        <IconBox {...this.props}></IconBox>
        <SwiperComponent /> 
        <BookList
          addEvent = { (item) => { bindAddEvent(item) } }
          bookData={bookData}
          detailEvent={ (item) => { this.props.history.push(`/detail/${item.id}`) } }
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
    bookData: state.bookData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookListData() {
      const action = getInitCartList()
      dispatch(action)
      // axios.get('/api/book').then(res => {
        // const data = res.data
      // })
    },
    bindAddEvent(item) {
      const action = toCartFn(item) 
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore)
