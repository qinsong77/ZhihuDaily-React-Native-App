/**
 * Created by 叶子 on 2017/9/3.
 */
import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import {screen, color} from '../common';

const styles = {
    container: {
        flex: 1,
        height: screen.width / 3,
    },

    wrapper: {},

    slide: {
        width: screen.width,
        height: screen.width / 3,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        flex: 1,
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width: screen.width,
        height: screen.width / 3,
    }
}

export default class extends Component {
    state = {
        swiperVisible: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({swiperVisible: true})
        }, 100)
    }

    render() {
        const {swiperVisible} = this.state;
        const {ImageList} = this.props;
        return (
            <View style={styles.container}>
                {
                    swiperVisible && ImageList && ImageList.length > 0 && (
                        <Swiper style={styles.wrapper} height={screen.width / 3}
                                dot={<View style={{
                                    backgroundColor: color.white,
                                    width: 5,
                                    height: 5,
                                    borderRadius: 4,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 3
                                }}/>}
                                activeDot={<View style={{
                                    backgroundColor: color.theme,
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 3
                                }}/>}
                                paginationStyle={{
                                    bottom: 0, left: null, right: 10
                                }}
                                loop
                                autoplay
                                removeClippedSubviews={false}
                        >
                            {
                                ImageList.map((v, i) => (
                                    <View style={styles.slide} key={i}>
                                        <Image resizeMode='stretch' style={styles.image} source={{uri: v.image}} />
                                    </View>
                                ))
                            }
                        </Swiper>
                    )
                }

            </View>
        )
    }
}
