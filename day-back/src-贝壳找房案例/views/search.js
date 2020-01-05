import React, { Component } from 'react'
import { connect } from 'react-redux'

const BackBox = (props) => {
  return <div className="icon" onClick={ () => { props.history.go(-1) } }>icon</div>
}

class SearchPage extends Component {
  render() {
    // const { searchVal, inputChange, searchList, handleSearchClick } = this.props
    return (
      <div className="search-page">
        <BackBox {...this.props}/>
        {/* <input
         value={searchVal}
         onChange={inputChange}
        /> */}
        
        {/* <ul>
          { searchList.map((item, index) => {
              return <li key={item.id}>
                <img src={item.img} alt=''/>
                {item.name}
                { index === 0 && <span
                  onClick={ () => { handleSearchClick(item) } }
                  className={item.isCheck? 'show search-btn' : 'search-btn' }> 
                  {item.isCheck? '已加入' : '加入书架' }
                   </span>}
                </li>
            }) }
        </ul> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // searchVal: state.searchVal,
    // searchList: state.searchList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // inputChange(e) {
    //   const value = e.target.value;
    //   const action = {
    //     type: 'init_search_value',
    //     value
    //   }
    //   dispatch(action)

    //   if (value) {
    //     axios.get('/api/search',{
    //       params: {
    //         type: value
    //       } 
    //     }).then(res => {
    //       const data = res.data
    //       const action = {
    //         type: 'init_search_list',
    //         data
    //       }
    //       dispatch(action)
    //     })
    //   }
    // },
    // handleSearchClick(item) {
    //   const action = {
    //     type: 'add_search',
    //     item
    //   }
    //   dispatch(action)
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)