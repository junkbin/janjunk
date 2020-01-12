/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Hello} from './src/Hello';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Hello);
