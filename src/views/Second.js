/**
 *  Class: Home
 *  Author: Notend
 *  Date: 2018-07-28 02:12
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Second
                </Text>
                <Button title='go to Drawer' onPress={()=>this.props.navigation.openDrawer()}/>
                <Button title='go to Detail' onPress={()=>this.props.navigation.navigate('Detail')}/>
            </View>
        );
    }
}
// 默认属性
Home.defaultProps = {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})