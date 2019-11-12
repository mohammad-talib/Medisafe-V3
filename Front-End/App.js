import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Path from './src/Components/path';
import Navigator from './src/navigation/MedNavigation';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class App extends Component {

  render(){
    const localhost= Path.yasmin;
    console.log(localhost);
    return (
      // <View style={styles.container}>
      //   <Text>Open </Text>
      // </View>
      <Navigator/>
    );
  }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });