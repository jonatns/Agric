
'use strict';

var React = require('react-native');
var Search = require('./Search.ios');
var Add = require('./AddHarvest.ios');

var Firebase = require("firebase");


var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

class Agric extends Component{

   render() {
      return (
         <NavigatorIOS ref='nav'
            style={styles.container}
            initialRoute={{
               title: 'Search',
               rightButtonTitle: 'Add',
               component: Search,
               onRightButtonPress: () => {
                  this.refs.nav.navigator.push({
                    title: "Add Harvest",
                    component: Add,
                    rightButtonTitle: 'Cancel',
                    onRightButtonPress: () => { this.refs.nav.navigator.pop(); }
                 });
              }

            }}/>
      );
   }
};

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('Agric', () => Agric);
