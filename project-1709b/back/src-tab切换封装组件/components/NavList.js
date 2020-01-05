import React, { Component } from 'react'

export default class componentName extends Component {
  
  UNSAFE_componentWillReceiveProps(nextprops) {
    // console.log(nextprops.tabIndex, 'nextProps')
    
  }
  render() {
    console.log('render')
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <h1
                key={index}
                className={ index === this.props.tabIndex ? 'active app-tag': 'app-tag' }
                onClick={this.handleClickEvent.bind(this, index, item)}
              >
                {item}
              </h1>
            )
          })
        }
      </div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  handleClickEvent(index) {
    const { navClickEvent } = this.props;
    navClickEvent(index)
  }
}
