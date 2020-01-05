// 普通的add函数
function add(x, y) {
  return x + y
}
// add(1, 2)   

// Currying后
function curryingAdd(x) {
  return function (y) {
    console.log(x, y)
      return x + y
  }
}

        // 3
curryingAdd(1)(2)   // 3