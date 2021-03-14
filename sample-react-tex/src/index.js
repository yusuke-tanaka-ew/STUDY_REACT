import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {render} from 'react-dom';

import texReducer from './reducers/index';
import TexArea from './containers/index';

const store = createStore(texReducer)

render(
  <Provider store = {store}>
    <TexArea />
  </Provider>,
  document.getElementById('root')
)