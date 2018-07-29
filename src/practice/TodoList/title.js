import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class extends Component{
    render(){
       return (
           <View style={styles.titleContainer}>
               <Text style={styles.title} >
                   Todo List
               </Text>
           </View>
       )
    }
}

const styles = StyleSheet.create({
    titleContainer:{
        paddingTop:20,
        backgroundColor:'lightskyblue',
    },
    title:{
        padding:10,
        color:'white',
        textAlign:'center'
    }
})