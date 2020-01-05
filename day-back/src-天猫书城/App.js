import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'
import FooterBar from './components/footerbar'
import { Provider } from 'react-redux'
import store from './store/index'
import BScroll from 'better-scroll'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div className="app">
          <main className='main'>
             <div className="content">
              <RouterView routes={config}></RouterView> 
             </div>
          </main>
          <FooterBar />
        </div>
        </BrowserRouter>
      </Provider>
    )
  }

  componentDidMount() {
    const wrapper = document.querySelector('.main')
    const scroll = new BScroll(wrapper, {
      // scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      // scrollY: false, //关闭竖向滚动
    })
  }
}

export default App;
