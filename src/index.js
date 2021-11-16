import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';

const main = document.querySelector('#root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    main    
)





