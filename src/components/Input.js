import React from 'react'
import {View,Text,TextInput, StyleSheet} from 'react-native'


export function Input(props){
    return(
          <TextInput placeholder={props.placeholder} value={props.value}
          editable={ props.editable }
          placeholderStyle={{color:'#B2B2B2'}}
          style={styles.container}/> 
    )
} 

const styles = StyleSheet.create({
    container:{
        height: 55,
        width: '100%',
        borderColor: '#B2B2B2',
        borderWidth:2,
        paddingLeft:15,
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        borderRadius: 10,
        marginTop:15
    }
});