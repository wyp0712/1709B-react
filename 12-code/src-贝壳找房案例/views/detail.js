import React, { Component } from 'react'
import axios from 'axios'
import '../mock/index'
import { connect } from 'react-redux';

import { ActionSheet, Toast } from 'antd-mobile';

const BackBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.go(-1) } }> 返回 </div>
}

class DetailCom extends Component {
  state = {
    clicked1: 'none',
  }

  dataList = [
    { url: 'wujiaoxing', title: '发送给朋友' },
    { url: 'star', title: '新浪微博' },
    { url: 'shuaxin', title: '生活圈' },
    { url: 'gengduo', title: '微信好友' },
    { url: 'gengduo_1', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`/icon/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));

  render() {
    const {detailData} = this.props
    return (
      <div className="detail-page">
        <BackBox {...this.props} />

        <span className="btn" 
          onClick={ () => { this.showShareActionSheet()  } } >
           蒙层 </span>

        {
          detailData.map((item) => {
            return <ul key={item.id}>
          
              <li>
                <img src={item.img} alt={item.name}/><br/>
              </li>
              <li>
                <span style={{display: 'inline-block',textAlign: 'left'}}>{item.des}</span> 
                {/* <span
                  onClick={() => addBookStore(item)} 
                  className={ item.isCheck ? 'show detail-btn' :'hide detail-btn' } > 
                  { item.isCheck ? '收藏成功' :'收藏' } 
                </span>  */}
              </li>
            </ul>
          })
        }
      </div>
    )
  }
  

  // showShareActionSheetMulpitleLine = () => {
  //   const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
  //   ActionSheet.showShareActionSheetWithOptions({
  //     options: data,
  //     message: 'I am description, description, description',
  //   },
  //   (buttonIndex, rowIndex) => {
  //     this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
  //   });
  // }

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: 'I am description, description, description',
    },
    (buttonIndex) => {
      // console.log(buttonIndex, 'buttonIndex')
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }


  componentDidMount() {
    // 获取参数id 并且把id传递给dispatch中的函数
    const id = this.props.match.params.id;
    // console.log(id, 'id-----详情id')
    const { getDetail } = this.props;
    getDetail(id)
  }
}

const mapStateToProps = (state) => {
  return {
    detailData: state.detailData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     addBookStore(item) {
      let flag = true
      const action = {
        type: 'collect_data',
        flag
      }
      dispatch(action)
     },
     getDetail(id) {
      axios.get('/api/detail', {
        params: {
          id: id
        }
      }).then(res => {
        const detailData = res.data
        const action = {
          type: 'detail_data',
          detailData
        }
        dispatch(action)
      })
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailCom)
