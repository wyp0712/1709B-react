import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'
// import FooterBar from './components/footerbar'
import { Provider } from 'react-redux'
import store from './store/index'

// import BScroll from 'better-scroll'

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
            {/* <FooterBar /> */}
          </div>
        </BrowserRouter>
      </Provider>
    )
  }

  componentDidMount() {
    const main = document.querySelector('.main')
    main.addEventListener('scroll',this.myscroll)
  }

  myscroll() {
    const navDom = document.querySelector('.app-nav')
    const main = document.querySelector('.main')
    if (main.scrollTop >= 200) {
      navDom.classList.add('nav-fixed')
    } else {
      navDom.classList.remove('nav-fixed')
    }
  }

  componentWillUnmount() {
    const main = document.querySelector('.main')
    main.removeEventListener('scroll', this.myscroll())
  }
}

export default App;
