import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types';

class NavList extends Component {
  // 就是让这个属性在函数类的外面也能访问
  static propTypes = {
    tabIndex: PropTypes.number,
    navList: PropTypes.array,
    navEvent: PropTypes.func
  }

  static defaultProps = {
    msg: 'hello world'
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('UNSAFE_componentWillReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return false; // 接下来 所有生命周期会重新走一遍，false，后面的生命周期就不走了；
  }
  
  UNSAFE_componentWillUpdate() {
    console.log('UNSAFE_componentWillUpdate=-  子组件更新之前')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate----子组件update')
  }



  render() {
    const { navList, tabIndex, msg  } = this.props;
    return (
      <Fragment>
        {msg} <br />
        {
          navList.map((item, index) => {
            return <h1
              key={index}
              className={index === tabIndex ? 'active app-tag': 'app-tag'}
              onClick={this.bindTabEvent.bind(this, index)}
            > {item}
            </h1>
          })
        }
      </Fragment>
    )
  }

  bindTabEvent(index) {
    const { navEvent } = this.props;
    navEvent(index)
  }
}

// NavList.propTypes = {
//   tabIndex: PropTypes.number,
//   navList: PropTypes.array,
//   navEvent: PropTypes.func
// }

export default NavList