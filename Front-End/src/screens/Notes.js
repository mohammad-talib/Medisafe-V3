import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Notes extends Component {
    state={
        id:this.props.navigation.state.params
    }
    render() {
        return (
        <View style={styles.screen}>
            <Text>Notes screen </Text>
            <Text>{this.state.id}</Text>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    screen:{

    }
})