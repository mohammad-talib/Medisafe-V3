import React,{Component} from 'react';
import { 
    View,
    Text,
    StyleSheet, 
    AsyncStorage, 
    Image, 
    ScrollView, 
    SafeAreaView,
    Button
} from 'react-native';


class HamburgerMenu extends Component {
   
    render() { 
        const { _id, username, email, age, gender}=this.props.navigation.state.params
        return ( 
            <View>
                <Text>HamburgerMenu screen </Text>
                <Text>{username}</Text>
                <Text>{email}</Text>
                <Text>{age}</Text>
                <Text>{gender}</Text>
                <Button title="Dates Medication" onPress={()=>this.props.navigation.navigate('Dates',_id,username) }/>
                <Button title="Measurment" onPress={()=>this.props.navigation.navigate('Measurment',_id) }/>
                <Button title="Notes" onPress={()=>this.props.navigation.navigate('Notes',_id) }/>
            </View>
         );
    }
}
 


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
})

export default HamburgerMenu;