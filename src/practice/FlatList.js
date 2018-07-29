import React,{Component} from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'

const rows = [
    {id: 0, text: 'View'},
    {id: 1, text: 'Text'},
    {id: 2, text: 'Image'},
    {id: 3, text: 'ScrollView'},
    {id: 4, text: 'ListView'},
    {id: 4, text: 'ListView'},
    {id: 4, text: 'ListView'},
    {id: 4, text: 'ListView'},
    {id: 4, text: 'ListView'},
    {id: 4, text: 'ListView'},
    {id: 4, text: 'ListView'},
    {id: 4, text: 'ListView'},
]
const extractKey = ({id}) => id

export default class extends Component{
    renderItem = ({item})=>{
        return (
            <Text style={styles.row}>
                {item.text}
            </Text>
        )
    }
    render(){
        return (
            <FlatList
                style={styles.container}
                data={rows}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />

        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
        flexGrow:2
    },
    row:{
        padding:15,
        marginBottom:10,
        backgroundColor:'gray'
    }
})