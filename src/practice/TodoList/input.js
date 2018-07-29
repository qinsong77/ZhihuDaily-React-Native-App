import React,{Component} from 'react'
import {View,TextInput} from 'react-native'

export default class extends Component{

    constructor(props){
        super(props);
        this.initId = 0;
        this.state = {
            newItem:''
        }
    }
    onChangeText = (text)=>{
        this.setState({
            newItem:text
        })
    }
    onSubmitItem = ()=>{
        const {onSubmitItem} = this.props;
        const {newItem} = this.state;
        if(!newItem) return;
        onSubmitItem({
            title:newItem,
            id: ++this.initId,
            completed:false
        });
        this.setState({
            newItem:''
        })
    }
    render(){
        const {placeholder} = this.props;
        return (
            <TextInput
                style={{height:50,padding:15}}
                value={this.state.newItem}
                onChangeText={this.onChangeText}
                onSubmitEditing={this.onSubmitItem}
                placeholder={placeholder}
            />
        )
    }
}