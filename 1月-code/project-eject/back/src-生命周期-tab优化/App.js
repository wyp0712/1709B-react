import React,{ Component } from 'react';
import data from './mock/data.json'
import NavList from './components/navList'
import MovieList from './components/movieList'

import axios from 'axios'
import './mock/index'

// 数据， 所有的变量 都要引入在import 下面
const movieData = data.movie;

/**
 * 
 * @param {组件}
 * 1. class组件
 * 
 * @param {JSX}
 * 1. ()
 * 2. {}
 * 3. 标签必须闭合
 * 4. className
 * 
 * @param {事件}
 * 1. 驼峰写法
 * 2. 绑定this
 * 
 * @param {回调函数：子父传值}
 * 1. 一个函数
 * 2. 作为参数
 * 3. 传入其他函数中
 * 4. 并且执行
 * 
 * 函数在执行的过程中，会将实参 传递给形参
 * 
 * @param {组件传值}
 * 
 * 1. 父子传值 ： 标签传值  props接收
 * 2. 子父传值：回调函数传值 形参接收
 * 
 * @param {组件}
 * 1. class组件
 * 2. 函数组件 （无状态组件）
 * 
 */

class App extends Component {
 
  constructor(props) {
    super(props)

    // 数据定义在state这个对象中；
    this.state = {
      navList: ['正在上映','即将上映'],
      tabIndex: 0,
      movieData,
      list: []
    }
  }

  UNSAFE_componentWillMount() {
    // console.log('UNSAFE_componentWillMount---组件挂载之前')
  }
   
  // 回调函数：
  // 1. 一个函数 2. 作为参数

  // render 函数必须在class中存在
  render() {
    // console.log('render-渲染')
    return (
      <div>
        <NavList 
          navList={this.state.navList}
          tabIndex={this.state.tabIndex}
          navEvent={(index) => this.handleTabEvent(index)}
        />

        <MovieList
          movieData={this.state.list}
          tabIndex={this.state.tabIndex}
          imgEvent={(index) => this.handleImgEvent(index)}
        />
      </div>
    )
  }

  componentDidMount() {
    // 请求数据
    // console.log('componentDidMount-组件挂载完毕了')
    axios.get('/api/list').then(res => {
      // console.log(res, 'res')
      // 请求到数据之后进行设置，
      this.setState({
        list: res.data.list
      })
      // console.log(this.state.list, 'list')
    })
  }

  UNSAFE_componentWillUpdate() {
    // console.log('UNSAFE_componentWillUpdate--组件更新')
  }

  componentWillUnmount() {
    // 取消定时器，取消原生事件监听 取消一些有副作用的操作
    // console.log('componentWillUnmount---组件销毁')
  }
  
  // 点击图片切换类名
  handleImgEvent(index) {
    const movieList = [...this.state.movieData]
    movieList[index].state = !movieList[index].state;
    this.setState({
      movieData: movieList
    })
  }
  
  // 点击tab切换数据s
  handleTabEvent(index) {
    // console.log(index, 'index-我是父组件中接收到的下标')
    this.setState(() => ({
      tabIndex: index
    }))
  }

}

export default App;
