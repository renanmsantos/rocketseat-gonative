import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import './config/DevToolsConfig';
import Routes from './routes';

export default function App() {
  return (
    <Provider>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#FEC810" />
        <Routes />
      </>
    </Provider>
  );
}
