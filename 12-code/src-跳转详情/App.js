import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'
import FooterBar from './component/FooterBar'
import './App.scss'
import InputDom from './views/Book'

// 当一个函数只有render的时候，可以改称无状态组件
export default () => {
  return (
    <div className="app">

      <InputDom
        item='aaa'
        inputValueFn={ (val) => { console.log(val, 'val') } }
      />
      {/* <BrowserRouter>
        <header className="header">hello wrld</header>
        <main className="main">
          <RouterView routes={config.routes} />
        </main>
        <FooterBar />
      </BrowserRouter> */}
    </div>
  )
}

