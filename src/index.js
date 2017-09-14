import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
