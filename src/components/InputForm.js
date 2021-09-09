import React from 'react'
import {View,Text,TextInput, StyleSheet} from 'react-native'
import { Control, Controller } from "react-hook-form";


export function InputForm({control,name,error,...rest}){
    
    const styleError = error ? "{'borderColor': 'red'}" : "";
    console.log(styles.input);
    return(
        <View style={ styleError}>
        <Controller
        control={control}
     
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
                style={[styles.input,error? styles.inputError : '']}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                {...rest}
            />
        )}
        name={name}
        />
        {error && <Text style={ styles.error }>{error}</Text>}
      </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        width: '100%',
   },
   input:{
        height: 55,
        width: '100%',
        borderColor: '#B2B2B2',
        borderWidth:2,
        paddingLeft:15,
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        borderRadius: 10,
        marginTop:15
    },
    inputError:{
        borderColor: 'red',
    },
    error:{
        color: 'red',
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
    }
});