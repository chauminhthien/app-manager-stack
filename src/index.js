import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { App }  from './components';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createStore from './store';
import { NotifycationProvider } from './components/NotifycationProvider';

const store = createStore();

ReactDOM.render(
  <Provider store={ store }>
    <NotifycationProvider >
      <App />
    </NotifycationProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
