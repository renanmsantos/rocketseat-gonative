import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FEC810" />
      <Routes />
    </>
  );
}
