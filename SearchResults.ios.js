'use strict';

var React = require('react-native');

var {
   StyleSheet,
   Image,
   View,
   TouchableHighlight,
   Text,
   ListView,
   Component
} = React;

var styles = StyleSheet.create({

thumb: {
   width: 80,
   height: 80,
   marginRight: 10
},

description: {
   marginBottom: 20,
   fontSize: 18,
   textAlign: 'center',
   color: '#656565'
},

rowContainer: {
   flexDirection: 'row',
   padding: 10
},
price: {
   fontSize: 25,
   fontWeight: 'bold',
   color: '#48BBEC'
},
separator: {
   height: 1,
   backgroundColor: '#dddddd'
},
title: {
   fontSize: 20,
   color: '#656565'
},
textContainer: {
    flex: 1
 },

});

class SearchResults extends Component {

   constructor(props) {
      super(props);

      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {
         dataSource: ds.cloneWithRows(['Bayamon'])
      };
   }

   renderRow(rowData, sectionID, rowID) {

  return (
    <TouchableHighlight
        underlayColor='#dddddd'>
      <View>
        <View style={styles.rowContainer}>
          <View  style={styles.textContainer}>
            <Text style={styles.price}>My Organic Farm</Text>
            <Text style={styles.title}
                  numberOfLines={1}>{rowData.title}</Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    </TouchableHighlight>
  );
}

  render() {
     return (
        <ListView
       dataSource={this.state.dataSource}
       renderRow={this.renderRow.bind(this)}/>
      );
    }
 }

 module.exports = SearchResults;
