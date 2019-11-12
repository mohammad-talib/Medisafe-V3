import React,{Component} from "react";
import { View, Text, StyleSheet , Button ,Image,TouchableOpacity,ImageBackground, } from 'react-native';


const StartingPage = (props) => {
    console.log('StartingPage: ',props);
    return (
      <View style = { styles.container } >
      <ImageBackground  style= { styles.backgroundImage } source={require('../../assets/background.jpg')} >
  
        <View style= { styles.Container }>
            {/* <Image style={{width:100 , height:100 }}
            source={require('../../assets/pic.png')}
             />   */}
          {/* <Text style = { styles.logoText }>
          Medisafe App
          </Text> */}
          <TouchableOpacity style={styles.button}
                onPress={()=>{props.navigation.navigate('Login');}}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  } 

const styles = StyleSheet.create({
    container:{
        // backgroundColor: '#37474F',
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize: 25,
        color: '#37474F'
    },
    button :{
        width : 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText : {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign : 'center'
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },

})

export default StartingPage;