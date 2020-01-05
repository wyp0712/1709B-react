import React, { Component } from 'react'
import qs from 'qs'

export default class Cart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: 'ddd'
    }
  }
  render() {
    return (
      <div>
        {this.state.city}
      </div>
    )
  }

  componentDidMount() {
    const city = qs.parse(this.props.location.search.split('?')[1]).city
    this.setState({
      city: city
    })
    console.log(qs.parse(this.props.location.search.split('?')[1]).city)
  }
}
