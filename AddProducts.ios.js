'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

class AddProducts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Add Tab
        </Text>
      </View>
    );
  }
}

module.exports = AddProducts;
