import React, { Component } from 'react'
// import SwiperComponent from '../components/swiper'
import BookList from '../components/bookList'
import { connect } from 'react-redux'

import axios from 'axios'
import '../mock/index'

const IconBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.push('/search') } }>back</div>
}

class BookStore extends Component {
  render() {
    const { bookData } = this.props
    return (
      <div className="book-store">
        <IconBox {...this.props}></IconBox>
        {/* <SwiperComponent />  */}
        <BookList
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
      axios.get('/api/book').then(res => {
        const data = res.data
        const action = {
          type: 'init_book_data',
          data
        }
        dispatch(action)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore)
