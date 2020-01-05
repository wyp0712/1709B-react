import React, { Component } from 'react';

// function withPersistentData(WrappedComponent) {
//   return (key) => {
//     return class extends Component {
//       UNSAFE_componentWillMount() {
//         let data = localStorage.getItem(key, '我是a的数据');
//         this.setState({data});
//       }
//       render() {
//         console.log(this.props, 'props------props')
//         // 通过 { ...this.props } 把传递给当前组件的属性 继续传递给被包装的组件
//         return <WrappedComponent data={this.state.data} {...this.props} />
//       }
//     }
//   }
// }

const withPersistentData = (options) => (WrappedComponent) => {
    return class extends Component {
      
      UNSAFE_componentWillMount() {
        let data = localStorage.getItem(options.key, '我是a的数据');
        this.setState({data});

        console.log(options, 'optionss')
      }
      render() {
        console.log(this.props, 'props------props')
        // 通过 { ...this.props } 把传递给当前组件的属性 继续传递给被包装的组件
        return <WrappedComponent data={this.state.data} {...options} {...this.props} />
      }
    }
}

function MyComponent(props) {
  return <div style={{background: props.bgColor}}>
    { console.log(props, 'props') }
    { props.data }
  </div>
}

export default withPersistentData({
  bgColor: 'blue',
  key: 'key'
})(MyComponent);