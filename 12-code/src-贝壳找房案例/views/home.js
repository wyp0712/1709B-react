import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookList from '../components/bookList'
import Dialog from '../components/dialog'
import NavBar from '../components/navBar'
import { 
        getInitCartList,
        toCartFn 
      } from '../store/actionCreator'

const IconBox = (props) => {
  return <div className="icon" onClick={ () => props.addEvent('1') } >
    <i className="iconfont"> &#xe643; </i>
  </div>
}

class BookStore extends Component {
  
  state = {
    flag: false
  }

  render() {
    const { cartData, toCart } = this.props;
    return (
      <div className="book-store">
        <NavBar />

       { this.state.flag && <Dialog>
         <i className="iconfont"
          onClick={ () => this.closeDialogEvent() }
         > &#xe643; </i>
       </Dialog>  }

        <IconBox addEvent={ (index) => this.handleComEvent(index)  } {...this.props}></IconBox>

        <BookList
          cartData={cartData}
          addEvent = {(item) => toCart(item) }
          detailEvent={ (item) => { this.props.history.push(`/detail/${item.id}`) } }
        />
      </div>
    )
  }

  closeDialogEvent() {
    const tip = document.querySelector('.tip')
    tip.style.left = '-65%';
    setTimeout(() => {
      this.setState({
        flag: false
      })
    }, 600)
  }

  componentDidMount() {
    const { getBookListData } = this.props;
    getBookListData()
  }

  handleComEvent = () => {
    this.setState(() => ({
      flag: true
    }), () => {
      const tip = document.querySelector('.tip')
      console.log(tip, 'tip----')
      setTimeout(() => {
        tip.style.left = '0'
      }, 0)
    })

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
