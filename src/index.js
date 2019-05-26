import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import reducers from './reducers/index'
import Home from './components/home'
import CreatePost from './components/createpost'
import PostDetail from './components/postdetail'
import DeletePost from './components/deletepost';


ReactDOM.render( <Provider store={createStore(reducers)}>
                  <BrowserRouter>
                    <div>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/postdetail' component={PostDetail} />
                    <Route path='/createpost' component={CreatePost} />
                    <Route path='/deletepost' component={DeletePost} />
                    </div>
                </BrowserRouter>
             </Provider>, document.getElementById('root'));
