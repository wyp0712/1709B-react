import React, { Fragment } from 'react'
import { Input, Button, Divider } from 'antd';
import '../mock/index'
import axios from 'axios'

class Login extends React.Component {

  // this.state = [];
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pwd: ''
    }
  }

  render() {
    return (
      <Fragment>
        账号： <Input value={this.state.user} onChange={(e) => this.handleInputUser(e)} style={{ width: '300px', margin: '15px' }} size="large" placeholder="large size" /> <br />
        密码： <Input value={this.state.pwd} onChange={(e) => this.handleInputPwd(e)} style={{ width: '300px', margin: '15px' }} size="large" placeholder="large size" />
        <Divider />
        <Button onClick={() => this.handleBtnClick()} size="large" type="primary">确定提交</Button>
      </Fragment>
    )
  }

  handleInputUser = (e) => {
    const target = e.target
    this.setState(() => ({
      user: target.value
    }))
  }

  handleInputPwd = (e) => {
    const target = e.target
    this.setState(() => ({
      pwd: target.value
    }))
  }

  handleBtnClick = () => {
    axios.post('/api/login', {
      user: this.state.user,
      pwd: this.state.pwd
    }).then(res => {
      console.log(res, 'res')
      let data = res.data
      if (data.errCode === 0) {
        localStorage.setItem('token', data.token)
        this.props.history.push('/home')
      } else {
        alert('输入有误')
      }
    })
  }
}

export default Login