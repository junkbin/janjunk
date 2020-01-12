/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {World} from './src/Hello';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => World);
