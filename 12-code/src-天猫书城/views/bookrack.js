import React, { Component } from 'react'
import { connect } from 'react-redux'

 class BookRack extends Component {
  render() {
    return (
      <div className="bookrack-page">

        { this.props.bookrack.map((item, index) => {
          return <ul key={index}>
            <li> <img src={item.img} alt=''/> </li> 
            <li> {item.name} </li>
          </ul>
        }) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bookrack: state.bookrack
  }
}

export default connect(mapStateToProps, null)(BookRack)
