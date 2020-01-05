import React, { Component,Fragment } from 'react'
import RouterView from '../router/index'
import { Link } from 'react-router-dom'


export default class Home extends Component {

  render() {
    return (
      <div>
       home <br />
       <hr/>
       <Link to="/home/tab1">tab1页面</Link> |
       <Link to="/home/tab2">tab2页面</Link>  <br/> 

      <RouterView routes={this.props.routes}/>
      </div>
    )
  }
}

