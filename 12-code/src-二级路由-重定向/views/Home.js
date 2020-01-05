import React, { Component,Fragment } from 'react'
import RouterView from '../router/index'
import { Link } from 'react-router-dom'
import store from '../store/index'
import data from '../mock/data.json.js'

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = store.getState()
    this.fn = store.subscribe(() => this.bindStoreEvent())
    // console.log(this.fn, 'fn')
  }

  render() {
    return (
      <div>
       <Link to="/home/tab1">tab1页面</Link> |
       <Link to="/home/tab2">tab2页面</Link>  <br/> 
     
       <RouterView {...this.props} routes={this.props.routes}/>

        {
          this.state.list.map(item => {
            return (
              <div key={item.id}>
                <div>
                  <img src={item.img} onClick={ () => { this.handleClick(item) } } alt=""/>
                </div> 
                <div>
                {item.nm}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  handleClick = (item) => {
    const action = {
      type: 'add_cart_item',
      item
    }
    store.dispatch(action)
  }

  componentDidMount() {
    const movieData = data.movieList
    const action = {
      type: 'init_movie_list',
      movieData
    }
    store.dispatch(action)
  }
  componentWillUnmount() {
    this.fn()
  }

  bindStoreEvent = () => {
    this.setState(store.getState())
  }
}

