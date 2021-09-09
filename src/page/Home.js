import React,{useState} from 'react'
import {View,Text,StyleSheet,SafeAreaView,TextInput,Button} from 'react-native'
import { TouchableOpacity } from 'react-native';



export function Home(){
    const [descricao, setDescricao] = useState('');
   
   
    function onchangeText(data) {
        console.log(data);
    }  

    function handleSendForm(){
        console.log("Texto enviado: " + descricao);
    }
   
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Cadastro de Tarefa</Text>
            
            <View style={styles.form}>
              <TextInput style={styles.input} placeholder="Descrição" onChangeText={x => setDescricao(x)}/>  
              
              <TouchableOpacity style={styles.button} onPress={handleSendForm}>
                <Text style={styles.textButton}>Salvar</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
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
    error:{
        fontSize: 15,
        color: 'red',
    },
    title:{
        fontFamily: 'Roboto_700Bold',
        fontSize: 28,
        color: '#8257E5',
        textAlign:'center'
    },
    form:{
        width: "85%",
    },
    select:{
        height: 55,
        width: "100%",
        borderColor: '#B2B2B2',
        borderWidth:2,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center'
    },
    picker:{
      fontSize: 25,
      color: '#B2B2B2',
      fontFamily: 'Roboto_400Regular',
    },
    textArea:{
        width: '100%',
        borderColor: '#B2B2B2',
        borderWidth:2,
        paddingLeft:15,
        fontSize: 18,
        fontFamily: 'Roboto_400Regular',
        borderRadius: 10,
        marginTop:15
    },
    button:{
        height: 70,
        width: "100%",
        backgroundColor: '#1DB863',
        borderRadius: 10,
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 20
 
    },
    textButton:{
      fontSize:20  
    }
});
