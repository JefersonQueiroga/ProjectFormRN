import React,{useState} from 'react'
import {View,Text,StyleSheet,SafeAreaView,TextInput,Button} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { InputForm } from '../components/InputForm';

// import form
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// YUP
const schema = yup.object().shape({
    descricao: yup.string().required(),
    idade: yup.number().typeError('Informe um valor númerico')
    .required().positive().integer(),
    nome: yup.string().required("Informe o nome"),
});

export function Home(){


    // constante retornadas pelo react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
   
    function onchangeText(data) {
        console.log(data);
    }  

    function handleSendForm(data){
        console.log("Texto enviado: " + JSON.stringify( data ) );
    }
   
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Cadastro de Tarefa</Text>
            
            <View style={styles.form}>
               
            <Controller
                control={control}
                rules={{required: true, }}
                render={({ field: { onChange, onBlur, value } }) => ( 
               
                    <TextInput style={styles.input} onBlur={onBlur} placeholder="Descrição" onChangeText={onChange}/>  
              
                )}
              name="descricao"/>
            
            {errors.descricao && <Text style={styles.error}>Campo Obrigatório</Text>}

            <InputForm name='idade' control={control} 
                placeholder="Idade"
                error={ errors.idade && errors.idade.message } />

            <InputForm name='nome' control={control} 
                placeholder="Nome"
                error={ errors.nome && errors.nome.message } />


              <TouchableOpacity style={styles.button} onPress={ handleSubmit ( handleSendForm )}>
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
