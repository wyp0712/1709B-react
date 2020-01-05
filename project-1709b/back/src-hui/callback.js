/**
 * 
 * @param { 异步: 结果获取的不确定 }
 * 1. 定时器
 * 2. ajax
 * 3. dom监听
 * 
 * @param { 解决异步并且获取到结果 }
 * 1. 回调函数
 * 2. promise
 * 3. *函数
 * 4. async 函数 异步解决的终极方案
 * 
 * @param { 同步: }  
 */

 function auto() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // fn('hell world')
        // return 'hello world'
        resolve('hello world')
      }, 3000)
    })
 }



async function todoList() {
 const a =  await auto()
 return a;
}

console.log(todoList())

// todoList().then(res => {
//   console.log(res, '我是promise获取到的结果')
// })

// console.log(data)

// * 
// * 1. 一个函数 
// * 2. 作为参数
// * 3. 传递到其他函数中
// * 4. 并且执行
// * 
// * 函数执行的时候会把实参 传递给 形参