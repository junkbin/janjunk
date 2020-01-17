/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {HelloStyled as Exceutor} from './src';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Exceutor);
