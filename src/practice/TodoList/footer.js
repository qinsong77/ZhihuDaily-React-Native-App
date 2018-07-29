import React,{Component} from 'react'
import {View,Button,Alert,StyleSheet} from 'react-native'


export default class extends Component{
    constructor(props){
        super(props)
    }
    render(){
       return (
           <View style={styles.buttonContainer} >
               <Button
                   style={styles.button}
                   color='tomato'
                   onPress={this.props.onRemoveCompleteItem}
                   title='Remove completed items'
               />
           </View>
       )
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        borderStyle:'solid',
        borderTopWidth:1,
        borderTopColor:'whitesmoke',
        paddingTop:5,
        paddingBottom:5,
    },
    button:{

    }
})