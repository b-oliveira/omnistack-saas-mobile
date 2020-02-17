import React, { Component } from 'react';

import navigation from '~/services/navigation';

import Routes from './routes';

export default function App() {
  function registerService(ref) {
    navigation.setTopLevelNavigatior(ref);
  }

  return <Routes ref={registerService} />;
}
