import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
// import App from './App';
import  { ThemeProvider } from './app/contexts/theme';
import Nav from './app/components/Nav'

import reportWebVitals from './reportWebVitals';

const PrefWorkspace = React.lazy(() => import('./app/components/PrefWorkspace'))

// React Component
class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark': 'light'
      }))
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav /> 
              <React.Suspense fallback={'Loading'}>
                <Switch>
                  <Route exact path='/' component={PrefWorkspace} />
                </Switch>            
              </React.Suspense>
            </div>
          </div>          
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
