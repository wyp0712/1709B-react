import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import RouterView from '../router/index'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        分类 <br />
         <Link to="/classify/tab1">tab1页面</Link> |
         <Link to="/classify/tab2">tab2页面</Link>  <br/>
          <RouterView {...this.props} routes={this.props.routes} />
      </div>
    )
  }
}
