import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'

/**
 * 
 * @param { BrowserRouter: 必须包含住所有的路由页面（包括路由标签）navlink }
 * @param { NavLink: 类似a标签 to=''}
 * @param { exact: 精确匹配 }
 * @param { Redirect:路由重定向 to=''}
 * 
 */

class  App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
           <RouterView routes={config}></RouterView>
        </BrowserRouter>
      </div>
    );
  }


 
}

export default App;
