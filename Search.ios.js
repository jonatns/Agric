'use strict';

var AutoComplete = require('react-native-autocomplete');
var Towns = require('./towns.json');

var React = require('react-native');
var SearchResults = require('./SearchResults.ios');

var {StyleSheet,
   Text,
   TextInput,
   View,
   TouchableHighlight,
   ActivityIndicatorIOS,
   Image,
   Component
} = React;

var styles = StyleSheet.create({
   description: {
      marginBottom: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#656565'
   },
   descriptionTitle: {
      marginBottom: 50,
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
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch'
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
      marginBottom: 20,
      alignSelf: 'stretch',
      justifyContent: 'center'
   },
   searchInput: {
      height: 36,
      padding: 4,
      marginRight: 5,
      marginBottom: 200,
      flex: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#33CCCC',
      borderRadius: 8,
      color: '#656565'
   }
});

class Search extends Component {

   constructor(props) {
      super(props);

      this.state = {
         message: ''
      };
   }

   onSearchPressed() {

         this.props.navigator.push({
            title: 'Harvests',
            component: SearchResults
         });
   }

   onLocationPressed() {
     navigator.geolocation.getCurrentPosition(
       location => {
         var search = location.coords.latitude + ',' + location.coords.longitude;
         this.setState({ searchString: search });

       },
       error => {
         this.setState({
           message: 'There was a problem with obtaining your location: ' + error
         });
       });
   }

   render() {
      console.log('SearchPage.render');

      return (
         <View style={ styles.container }>
            <Text style={ styles.descriptionTitle }>
               Search for local organic farmers!
            </Text>

            <View style={ styles.flowRight }>
               <TextInput
                  style={ styles.searchInput }
                  placeholder='Search by town'
                  placeholderTextColor='#656565'
                  />
               <TouchableHighlight style={styles.button}
                  onPress={ this.onSearchPressed.bind(this) }
                  underlayColor='#99d9f4'
                  >
                  <Text style={ styles.buttonText }>Go</Text>
               </TouchableHighlight>
            </View>
            <Text style={ styles.description }>
               Search near your location
            </Text>
            <TouchableHighlight style={ styles.button }
               underlayColor='#99d9f4'
               onPress={this.onLocationPressed.bind(this)}
               >
               <Text style={ styles.buttonText }>Location</Text>
            </TouchableHighlight>
            <Text style={styles.description}>{this.state.message}</Text>
         </View>
      );
   }
}

module.exports = Search;
