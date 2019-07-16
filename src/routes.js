import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#FEC810',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
