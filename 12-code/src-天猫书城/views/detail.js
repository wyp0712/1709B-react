import React, { Component } from 'react'
import axios from 'axios'
import '../mock/index'
import { connect } from 'react-redux'

const BackBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.go(-1) } }>back</div>
}

class DetailCom extends Component {
  render() {
    const { addBookStore,detailData} = this.props
    return (
      <div className="detail-page">
        <BackBox {...this.props} />
        {
          detailData.map((item) => {
            return <ul key={item.id}>
              <li>
                <img src={item.img} alt={item.name}/><br/>
              </li>
              <li> 
                <span style={{display: 'inline-block',textAlign: 'left'}}>{item.des}</span> 
                <span
                  onClick={() => addBookStore(item)} 
                  className={ item.isCheck ? 'show detail-btn' :'hide detail-btn' } > 
                  { item.isCheck ? '已加入' :'加入书架' } 
                </span> </li>
            </ul>
          })
        }
      </div>
    )
  }

  componentDidMount() {
    // 获取参数id 并且把id传递给dispatch中的函数
    const id = this.props.match.params.id;
    console.log(id, 'id-----详情id')
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
        type: 'add_detail',
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
