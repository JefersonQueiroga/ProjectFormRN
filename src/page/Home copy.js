import React,{useState} from 'react'
import {View,Text,StyleSheet,SafeAreaView,TextInput,Button} from 'react-native'
import { Input } from '../components/Input';
import {Picker} from '@react-native-picker/picker'; //https://github.com/react-native-picker/picker
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';

//Validar formulário
import { useForm,Controller} from 'react-hook-form'
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const shema  = Yup.object().shape({
    firstName: Yup.string().required('Nome é obrigatório'),
    idade: Yup.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório')
 })

export function Home(){
    const [selectedLanguage, setSelectedLanguage] = useState("Selecione um Categoria");
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
   
    const { control, handleSubmit, reset, formState: {errors} } = useForm({ resolver: yupResolver(shema) });
    
    function onSubmit(data) {
        console.log(data);
    }  

   
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Cadastro de Tarefa</Text>
            <View style={styles.form}>
            <Controller control={control} rules={{  required: true,  }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="firstName"
                defaultValue=""
            />
            {errors.firstName && <Text style={styles.error}>{errors.firstName.message}</Text>}

            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                )}
                name="idade"
                defaultValue=""
            />
            {errors.idade && <Text style={styles.error}>{ errors.idade.message}</Text>}

              
              <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
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
