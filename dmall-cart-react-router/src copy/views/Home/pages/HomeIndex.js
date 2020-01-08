import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        home-Isndex

        <img onClick={ () => { this.props.history.push({
          pathname: '/detail',
          state: {
            id: 1
          }
        }) } } src='https://p0.meituan.net/128.180/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg' /> 
      </div>
    )
  }
}
