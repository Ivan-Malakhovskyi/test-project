import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  colors: {
    mainBgColor: '#ffffff',
    mainBlackColor: ' #121417',
    addGreyBgColor: '#F7F7FB',
    addBlackColor: '#363535',
    mainGreyColor: '#8A8A89',
    primaryBlueColor: '#3470FF',
    addBlueColor: '#0B44CD',
    addBgColor: 'rgba(18, 20, 23, 0.50)',
    addWhiteColor: '#F9F9F9',
  },

  shadows: {
    boxShadow:
      '0px 1px 6px rgba(46, 47, 66, 0.08),0px 1px 1px rgba(46, 47, 66, 0.16),0px 2px 1px rgba(46, 47, 66, 0.08)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/test-project">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
