import React, { Component } from 'react';
import axios from "axios"
import "./data/index"

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      tabIndex:0,//初始下标
      list:[]
    }
  }

  render(){
    return (
      <div>
       {
         this.state.list.map((item,index)=>{
         return <h1 key={index} 
          onClick={()=>this.bindBtn(index)}
         >{item.name}</h1>
         })
       }
       { console.log(this.state.list.length) }
       { this.state.list.length && this.state.list[this.state.tabIndex].contents.map((item,index)=>{
           return <li key={index}>{item}</li>
           })  }
       <ul>
         {/* {
           this.state.list[this.state.tabIndex].contents.map((item,index)=>{
           return <li key={index}>{item}</li>
           })
         } */}
       </ul>
      </div>
    )
  }
   
  //生命周期接受数据
  componentDidMount(){
    axios.get("/api/list").then(res=>{
      // console.log(res.data)
      this.setState({
        list:res.data
      })
    })
  }

  bindBtn(index){
    console.log(index, 'index') 
    this.setState(() => ({
      tabIndex:index
    }))

  }
}


export default App;
