import React,{Component} from 'react'
import {View,Text,FlatList,TouchableOpacity,StyleSheet,PixelRatio} from 'react-native'
import CheckBox from './CheckBox'
const extractKey = (item) => item.id;
export default class extends Component{
    constructor(props){
        super(props)
    }

    renderItem = ({item})=>{
        const {onToggleItemCompleted, onRemoveItem} = this.props
        const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item
        return (
            <View style={itemStyle} key={item.id}>
                <Text>{item.title}</Text>
                <View style={styles.rightContainer}>
                    <CheckBox
                        isChecked={item.completed}
                        onToggle={()=>onToggleItemCompleted(item.id)}
                    />
                    <TouchableOpacity onPress={()=>{onRemoveItem(item.id)}}>
                        <Text style={styles.removeButton}>&times;</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    extractKey={extractKey}
                    data={this.props.Data}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor:'lavender',
        flex:1,
    },
    item:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'lavender'
    },
    rightContainer:{
        flexDirection:'row',
        alignItems: 'center',
    },
    removeButton:{
        marginLeft:10,
        marginBottom:2,
        color:'#cd5c5c',
        fontSize:26
    },
    completed:{
        backgroundColor:'whitesmoke'
    }
})