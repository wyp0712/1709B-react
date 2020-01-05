import React from 'react'

// class MovieList extends React.Component {
//   render() {
//     console.log('render-我是子组件的render')
//     return (
//       <ul>
//           {
//            this.props.movieData.map((item, index) => {
//            return <li key={index}>
//              {/* <img src={item.img}/> */}
//              {item.title}
//              {item.name}
//            </li>
//             //  if (item.flag && this.props.tabIndex === 0) {
//             //    return <li key={index}>
//             //      <img 
//             //       className={item.state ? 'img-border': ''}
//             //       onClick={this.bindImgEvent.bind(this, index)}
//             //      src={item.img} alt=''/>
//             //      {item.name}
//             //    </li>
//             //  } else if (!item.flag && this.props.tabIndex === 1) {
//             //   return <li key={index}>
//             //       <img 
//             //       className={item.state ? 'img-border': ''}
//             //       onClick={this.bindImgEvent.bind(this, index)}
//             //       src={item.img} alt=''/>
//             //       {item.name}
//             //     </li>
//             //  }
//            }) 
//           }
//         </ul>
//     )
//   }
//   // bindImgEvent(index) {
//   //   this.props.imgEvent(index)
//   // }
// }


// 如果一个子组件只有render就可以改造成函数组件（无状态组件）没有生命周期
const MovieList = (props) => {
  const { movieData } = props;
  return (
    <ul>
      {
        movieData.map((item, index) => {
        return <li key={index}>
          {/* <img src={item.img}/> */}
          {item.title}
          {item.name}
        </li>
        })
      }
    </ul>
  )
}

export default MovieList;