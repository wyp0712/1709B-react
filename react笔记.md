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

# context 嵌套组件传值
 1. 创建一个context对象，放在一个单独的文件中；
 2. 在爷爷组件中，引入context对象；
 3. 给context.provider组件传入你想要传入的值
 4. 在孙子组件中，通过在context.cusumer组件中调用回调函数,拿值。

 5. 如何想从孙子传递给爷爷，通过回调函数； 




