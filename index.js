/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/practice/TodoList/app';  //一个todolist practice
// import App from './src/root'
import {name as appName} from './app.json';

//下面两行是屏蔽警告
console.disableYellowBox = true ;
console.warn('YellowBox is disabled.');

AppRegistry.registerComponent(appName, () => App);
