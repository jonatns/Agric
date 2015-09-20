'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  AlertIOS,
  Component
} = React;

var styles = StyleSheet.create({
   description: {
     marginBottom: 20,
     fontSize: 18,
     textAlign: 'center',
     color: '#656565'
   },
  container: {
     padding: 30,
     marginTop: 65,
     alignItems: 'center',
     backgroundColor: '#00CC66'
  },
flowRight: {
   flexDirection: 'column',
   alignItems: 'center',
   alignSelf: 'stretch'
},
  input: {
     marginTop: 15,
     height: 36,
     padding: 4,
     marginRight: 5,
     flex: 4,
     fontSize: 18,
     borderWidth: 1,
     borderColor: '#33CCCC',
     borderRadius: 8,
     color: '#656565'
  },
  buttonText: {
     fontSize: 18,
     color: '#656565',
     alignSelf: 'center'
  },
  button: {
     height: 36,
     flex: 1,
     flexDirection: 'row',
     backgroundColor: '#33CCCC',
     borderColor: '#33CC33',
     borderWidth: 1,
     borderRadius: 8,
     marginTop: 20,
     marginBottom: 200,
     alignSelf: 'stretch',
     justifyContent: 'center'
  },
});

class AddHarvest extends Component {

   constructor(props) {
      super(props);
      var myFirebaseRef = new Firebase('https://agric.firebaseio.com/');

      this.itemsRef = myFirebaseRef.child('harvest');

        this.state = {
          newName: '',
          newLocation: '',
          newProduct: '',
        };
    }

    addHarvest() {
      if (this.state.newLocation !== '' && this.state.newProduct !== '' && this.state.newName !== '') {
         this.itemsRef.set({
            name: this.state.newName,
            location: this.state.newLocation,
            product: this.state.newProduct
         });
         this.setState({
            newName: '',
            newLocation : '',
            newProduct : ''
         });

         AlertIOS.alert(
            'Harvest Added!',
            ':)',
            [
               {text: 'Ok'},
            ]
         )
      }
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.description }>
          Enter your harvest details
        </Text>
        <View style={ styles.flowRight }>
        <TextInput
           style={ styles.input }
           placeholder='name'
           placeholderTextColor="gray"
           onChangeText={(text) => this.setState({newName: text})} value={this.state.newName}
           />
          <TextInput
             style={ styles.input }
             placeholder='location'
             placeholderTextColor="gray"
             onChangeText={(text) => this.setState({newLocation: text})} value={this.state.newLocation}
             />
         <TextInput
             style={ styles.input }
             placeholder='products'
             placeholderTextColor="gray"
            onChangeText={(text) => this.setState({newProduct: text})} value={this.state.newProduct}
             />
        <TouchableHighlight style={ styles.button }
             noteunderlayColor='#99d9f4'
             onPress={() => this.addHarvest()}
            >
            <Text style={ styles.buttonText }>Add</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

module.exports = AddHarvest;
