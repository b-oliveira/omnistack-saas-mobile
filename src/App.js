import React, { Component } from 'react';

import navigation from '~/services/navigation';

import createNavigator from './routes';

export default function App() {
  const Routes = createNavigator();

  function registerService(ref) {
    navigation.setTopLevelNavigatior(ref);
  }

  return <Routes ref={registerService} />;
}
