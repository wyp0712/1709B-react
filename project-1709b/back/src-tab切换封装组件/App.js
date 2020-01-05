import React, { Component,Fragment } from 'react';
import './App.scss'
import data from './mock/data.json'
import MovieList from './components/MovieList'
import NavList from './components/NavList'
// console.log(data.movie, 'data')
const movieData = data.movie;
/**
 * @param {JSX}
 * 1. {js代码}
 * 2. (html代码)
 * 3. jsx中所有的标签，都必须是闭合标签
 * 
 * @param {JSX编译成什么}
 * 1. React.createElement()
 * 
 * @param {设置state中的数据}
 * 1. this.setState(() => ({tabIndex: index}))
 * 
 * @param {组件}
 * 1. class组件
 * 2. 函数组件
 * 
 * @param {安装包的方式}
 * 1. yarn add node-sass sass-loader
 * 2. yarn add swiper
 * 
 * @param {事件绑定}
 * 1. 写法：驼峰方式
 * 2. 绑定this :  this.bindTapEvent.bind(this)
 */

class App extends Component {
  constructor(props) {
    super(props)
    // 所有的数据必须定义在state中
    this.state = {
      list: ['猪年','鼠年'],
      movieData,
      tabIndex: 0 // 全局的下标；
    }
  }

  render() {
    return (
      <Fragment>
        <NavList
          list={this.state.list}
          tabIndex={this.state.tabIndex}
          navClickEvent={(index) => this.handleClickEvent(index)}
        />

        <MovieList
          movieData={this.state.movieData}
          tabIndex={this.state.tabIndex}
          imgEvent={(index) => this.bindImgEvent(index)}
        />
      </Fragment>
    )
  }

  bindImgEvent(index) {
    const movieData = [...this.state.movieData]
    movieData[index].state = !movieData[index].state;
    this.setState({
      movieData: movieData
    })
  }

  handleClickEvent(index) {
    this.setState(() => ({
      tabIndex: index
    }))
  }
}

export default App;