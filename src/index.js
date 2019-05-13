import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider} from 'react-redux'
import { store }  from './lib/configureStore';
import App from './components/App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


ReactDOM.render(
  <ReduxProvider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root')
)
