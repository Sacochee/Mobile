import React from 'react'
import { Image } from 'expo-image'
import {  StyleSheet, View } from 'react-native'


export default function HomeBarIcon({name} : {name : "on" | "off"}) {
    if(name == "off"){
        return (
            <Image src={require("./assets/images/brain_dark.png")} width={30} height={30}/>
          )
    }else{
        return(
            <View style={focusStyle.main}>
                <Image src={require("./assets/images/brain_light.png")} width={30} height={30}/>
            </View>
        )
    }
  
}


const focusStyle = StyleSheet.create({
    main : {
        width : 40,
        height : 40,
        borderRadius : 500,
        
    }

})