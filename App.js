import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/page/Home';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,  
} from '@expo-google-fonts/roboto'


export default function App() {
  const[fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,  
  });
  

  if(!fontLoaded){
    return <AppLoading/>
  }

  return <Home/>
}

