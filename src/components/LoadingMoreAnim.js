/**
 *  Class: LoadingMoreAnim
 *  Author: Notend
 *  Date: 2018-07-29 16:06
 *  Description: 
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
export default class LoadingMoreAnim extends Component {
  
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
        <View
            style={{flexDirection:'row',alignSelf:'center',alignItems:'center',flex:1}}>
            <ActivityIndicator
                size={'small'}
                color='gray'
                animating={true}
                style={{width:20,height:20}}
            />
            <Text style={{
                color:'gray',
                fontSize:14,
                padding:10
            }}>
                正在加载更多...
            </Text>
        </View>
    );
  }
}
// 默认属性
LoadingMoreAnim.defaultProps = {
    
}

const styles = StyleSheet.create({
    
})