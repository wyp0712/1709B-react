import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// home
const Home = (props) => {
  return (
    <Fragment>
      <a href='/detail'>home-page</a>
      {/* <button onClick={ () => props.history.push('detail/1')   }>点击确定</button> */}
      <button onClick={ () => props.history.push({
        pathname: '/detail',
        state: {
          id: 3
        }
      })}>点击确定</button>
    </Fragment>
  )
}

// detail
class Detail extends Component {
  render() {
    return (
      <Fragment>
        <a href='/'>DETAIL-page</a>
      </Fragment>
    )
  }

  componentDidMount() {
    console.log(this.props.match.params, 'canshu ')
    console.log(this.props.history.location.state, 'location')
  }
}

class RouterApp extends React.Component {
  render() {
    return (
      <Fragment>
        <nav>
          <span><Link to='/'>首页</Link></span>
          <span><Link to='/detail'>详情页</Link></span>
        </nav>

        <Switch>
          <Route exact path='/' component={Home}></Route> 
          <Route path='/detail' component={Detail}></Route> 
        </Switch>

      </Fragment>
    )
  }
}

class RouterSample extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    )
  }
}

export default RouterSample;


