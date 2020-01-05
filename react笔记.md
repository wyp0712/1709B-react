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



