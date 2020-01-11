{ 码敲十遍，其义自现 }

通过脚手架 安装
npx create-react-app 项目名字

public - 静态资源访问目录 img   /img/1.jpg
src - APP.js 组件的视图入口文件
    - index.js  主入口文件


# 安装脚手架
npx create-react-app demo;

# 目录介绍：
 public 静态资源访问目录  img
 src  
   App.js 视图入口文件
   index.js 主入口文件

# 组件传值

# children
  1. 弹出框中输入内容，类似于vue的slot
 

# context 嵌套组件传值
 1. 创建一个context对象，放在一个单独的文件中；
 2. 在爷爷组件中，引入context对象；
 3. 给context.provider组件传入你想要传入的值
 4. 在孙子组件中，通过在context.cusumer组件中调用回调函数,拿值。

 5. 如何想从孙子传递给爷爷，通过回调函数； 


# 高阶组件：

 ## 高阶组件是react中一个很重要且比较复杂的概念，主要用来实现组件逻辑的抽象和复用。如果能合理的使用高阶组件能显著提高项目的代码质量。

 ## 在js中，高阶函数是以函数为参数，并且返回值也是函数的函数。类似地，高阶组件（HOC）接收react组件作为参数，并且返回一个新的React组件。高阶组件本质上也是一个函数，并不是一个组件，形式如下：
 ## const EnhancedComponent = highterOrderComponent(WrappedComponent);


 eg: 现在有一个组件myComponent，需要从本地存储中获取数据，然后渲染到界面， 

function withPersistentData(WrappedComponent) {
  return class extends Component {
    componentWillMount() {
      let data = localStorage.getItem('data', 'hello world');
      this.setState({data});
    }

    render() {
      // 通过 { ...this.props } 把传递给当前组件的属性 继续传递给被包装的组件
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

function MyComponent(props) {
  return <div>
    { props.data }
  </div>
}

const MyComponentWithPersistentData = withPersistentData(MyComponent)

### eg:  withPersistentData就是一个高阶组件，它返回一个新的组件，在新的组件的componentWillMount中统一处理从localStroage中获取数据的逻辑，然后将获取到的数据通过props传递给被包装的组件WrappedComponent,这样WrappedComponent中就可以直接使用props.data获取需要展示的数据。当有其他组件也需要这段逻辑时候，继续使用withPersistentData这个高阶组件包装这些组件。本质是装饰者设计模式。

# 高阶组件使用场景：
1. 操作props
2. 通过ref访问组件实例
3. 组件状态提升
4. 用其他元素包装组件。


## 1. 在被包装组件接收props前，高阶组件可以先拦截到props，，对props执行增 删 改 等操作。

## 2. 高阶组件通过ref获取包装组件实例的引用，然后高阶组件就具备了直接操作被包装组件的属性和方法的能里。

## 3. 利用高阶组件将原本受控组件需要自己维护的状态统一提升到高阶组件中。

## 4. 可以在高阶组件渲染WrappedComponent 时添加额外的元素，这种情况通常用户为WrappedComponent 增加布局或者修改样式。
   
   function withRedBackGround(WrappedComponent) {
     return class extends React.component {
       render() {
         return (
           <div style={{background: 'red'}}>
              <WrappedComponent {...this.props}/> 
           </div>
         )
       }
     }
   }
   
 
# es6 模块化： 
  import '' from '';

  export 这种抛出，必须采用同样的名字 结构引入 { name }； 如果非要换名字，就采用
  import * as a from '';

  export default '';
  
# 高阶组件：

  1. 定义: 传入一个组件，并且返回一个组件，就是高阶组件
  2. 好处: 复用 代码逻辑；
  3. 柯里化的组件调用；(组件)(参数)


  作业： 封装一个
     input 受控组件：
       1. value
       2. onChange={}
  

# 路由： 

 ## 安装路由 
  yarn add react-router-dom
 ## 配置页面

 ## 配置文件 
    config.js  []
    index.js  RouterView

 ## 循环路由 

 ## 注意配置规则： 

    每一级路由都有一个封装好的 RouterView 组件 


# redux 
  yarn add redux react-redux    


# react-redux  yarn add redux react-redux    
 ##  react-redux  介绍：
  1. # 配合redux使用，
  2. # 它是redux中间件，
  3. # 作用：连接组件和store;
### App.js

 import { Provider } from 'react-redux';
 import Todo from './todo'
 import store from './store/index.js'

 export default () => {
   return <Provider  store={store}>  <Todo />   </Provider>
 }


### Todo.js
 import { connect } from 'react-redux';
 class Todo extends Component {
   render() {
     const {inputValue, changetInputValue } = this.props;
     return <div></div>
   }
 }

 const mapStateToProps = (state) => {
   return {
      inputValue: state.inputValue 
   }
 }

 const mapActionToProps = (dispatch) => {
   return {
     changetInputValue() {
       const action = {
         type: 'init_change_input',
         data
       }
       dispatch(action)
     } 
   }
 }

 export default  connect()()



# redux 数据状态管理器
 ## redux-thunk 让action可以提交异步函数
 ## react-redux 让组件和redux的连接更方便

  1. store
  2. reducer
     ### 拷贝数据 修改数据 返回确定数据
  3. actionCreator
     ### 将所有的文件提交给这个文件；   




# react-create-app

 ## 主入口文件： index.js 
     渲染dom 挂载dom
 ## App.js 视图入口文件：
   react-redux  react-router-dom 

  1. store  <Provider store={store}>  </Provider>   
  2. 路由  BrowserRouter

 ## views 视图组件(路由页面： 登陆 注册 首页 购物车)

 ## components: 功能组件 （头 尾 swiper tab）
 
 ## store 数据管理中心 （中介）
    index.js 入口文件   （管理员角色）
    reducer.js 书写逻辑（电脑角色）


    组件内部开始运行： action提交 - store - reducer - store-
    
    actionCreator.js: 
      import axios from 'axios';
      import './mock/index.js';

      export const getAdd = (index) => {
         return {
           type: 'add_cart',
           index
         }
      }

      export const initData = (data) => {
        return {
          type: 'init_data',
          data
        }
      }

      export const getData = () => {
        return (dispatch) => {
           axios.get('/api/list').then(res => {
             const action = initData(res.data)
             dispatch(action)
           })  
        }
      }



    各个文件直接的关系：

    购物车.js
    import { getAdd,getData } from '';

    componentDidMount() {
      this.props.initdata()
    }
      
    const mapActionTopProps = (diapatch) => {
      return {
        add() {
          const action = getAdd(index);
          dispatch(action);
        },
        initdata() {
          const action = getData()
          dispatch(action)
        }
      }
    }

  ## redux  redux-thunk(异步函数提交) react-redux;  

 ## mock 拦截ajax 生成随机数据
    
    const data = Mock.mock({
      'list|10': [ {} ]
    })

   Mock.mock('/api/list', data)



     