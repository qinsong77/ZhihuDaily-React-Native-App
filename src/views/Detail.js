/**
 *  Class: Detail
 *  Author: Notend
 *  Date: 2018-07-28 02:20
 *  Description: 
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

export default class Detail extends Component {
  
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <Text>
          detail
        </Text>
          <Button title='go to Drawer' onPress={()=>this.props.navigation.openDrawer()}/>
          <Button title='go to home' onPress={()=>this.props.navigation.navigate('home')}/>
      </View>
    );
  }
}
// 默认属性
Detail.defaultProps = {
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});