/**
 *  Class: HomeHeader
 *  Author: Notend
 *  Date: 2018-07-29 00:37
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper'
import {screen} from '../common'

export default class HomeHeader extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // 渲染
    render() {
        const {ImageList} = this.props;
        return (
            ImageList.length > 0 && (<Swiper onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{
                        backgroundColor: 'rgba(0,0,0,.3)',
                        width: 5,
                        height: 5,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}/>}
                    activeDot={<View style={{
                        backgroundColor: '#ffffff',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}/>}
                    paginationStyle={{
                        bottom: 10, right:0,
                        marginLeft: "auto",
                        marginRight:"auto", //居中
                    }} loop autoplay autoplayTimeout={3.5} height={200}>
                {this.props.ImageList.map((item, i) => {
                    return this.renderItem(item, i)
                })}
            </Swiper>)
        );
    }

    renderItem(item, i) {
        return (
            <View  key={i} >
                <Text style={styles.sliderTitle}>{item.title}</Text>
                <Image  source={{uri: item.image}} style={styles.image}/>
            </View>
        )
    }
}
// 默认属性
HomeHeader.defaultProps = {}

const styles = StyleSheet.create({
    slider: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    sliderTitle:{
        position:'absolute',
        bottom:20,
        zIndex:100,
        padding:10,
        fontSize:20,
        color:'#ffffff'
    },
    image: {
        width: screen.width,
        // flex: 1,
        backgroundColor: 'transparent',
        height: 200
    }
})