import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings174910Navigator from '../features/Settings174910/navigator';
import UserProfile174903Navigator from '../features/UserProfile174903/navigator';
import Settings174902Navigator from '../features/Settings174902/navigator';
import Settings174900Navigator from '../features/Settings174900/navigator';
import SignIn2174898Navigator from '../features/SignIn2174898/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings174910: { screen: Settings174910Navigator },
UserProfile174903: { screen: UserProfile174903Navigator },
Settings174902: { screen: Settings174902Navigator },
Settings174900: { screen: Settings174900Navigator },
SignIn2174898: { screen: SignIn2174898Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
