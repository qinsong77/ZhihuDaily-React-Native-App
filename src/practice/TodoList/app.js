import React, {Component} from 'react'
import {View, StyleSheet,Alert} from 'react-native'
import Title from './title'
import Input from './input'
import List from './List'
import Footer from './footer'

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [{title: 'init text', id: 0, completed: false}]
        }
    }

    addNewItem = (newItem) => {
        this.setState((preState) => ({
            listData: [...preState.listData, newItem]
        }))
    }
    onToggleItemCompleted = (id)=>{
        this.setState((preState) => {

            const newListData = preState.listData.map(item=>{
                const newItem = item;
                if(item.id === id){
                    item.completed = !item.completed
                }
                return newItem;
            })

            return {
                listData:newListData
            }
        })
    }
    onRemoveItem = (id)=>{
        this.setState((preState) => {

            const newListData = preState.listData.filter((item, index) => {
                return item.id !== id
            })

            return {
                listData:newListData
            }
        })
    }
    onRemoveCompleteItem = ()=>{
        this.setState((preState) => {
            const newListData = preState.listData.filter((item) => {
                return item.completed !== true
            })

            if(preState.listData.length === newListData.length){
                Alert.alert(
                    'Mention',
                    'There is no completed items',
                    { cancelable: false }
                )
                return {};
            }
            return {
                listData:newListData
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Title/>
                <Input placeholder='Enter an new Item!' onSubmitItem={this.addNewItem}/>
                <List
                    Data={this.state.listData}
                    onToggleItemCompleted = {this.onToggleItemCompleted}
                    onRemoveItem={this.onRemoveItem}
                />
                <Footer onRemoveCompleteItem={this.onRemoveCompleteItem}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
})