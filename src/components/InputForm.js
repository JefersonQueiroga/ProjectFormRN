import React from 'react'

import { useForm, Controller } from "react-hook-form";
import {View,Text,StyleSheet,TextInput} from 'react-native'

export function InputForm({control, name,error, ...rest }){
    return(
        <View>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => ( 
               
                    <TextInput style={[styles.input, error ? styles.inputError : ""]} 
                      onBlur={onBlur} {...rest}
                      onChangeText={onChange}/>  
              
                )}
              name={name}/>
            
            { error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: "100%"
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
        fontSize: 15,
        color: 'red',
    },
})