/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Search = require('./Search.ios');
var Add = require('./AddProducts.ios');


var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} = React;

class Agric extends Component {
   constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'Search'
      };
    }
    render() {
     return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Search'}
          systemIcon="search"
          onPress={() => {
              this.setState({
                  selectedTab: 'Search',
              });
          }}>
            <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'Add'}
          systemIcon="more"
          onPress={() => {
              this.setState({
                  selectedTab: 'Add',
              });
          }}>
            <Add/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Agric', () => Agric);
