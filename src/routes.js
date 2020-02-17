import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { useSelector } from 'react-redux';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';

export default function createNavigator() {
  const { signed } = useSelector(state => state.auth);

  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Main,
      },
      {
        initialRouteName: signed ? 'Main' : 'SignIn',
      }
    )
  );
}
