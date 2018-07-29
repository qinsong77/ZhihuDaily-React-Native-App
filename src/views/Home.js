/**
 *  Class: Home
 *  Author: Notend
 *  Date: 2018-07-28 02:12
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image, FlatList, ScrollView, RefreshControl, SectionList,TouchableOpacity} from 'react-native';
import {Fetch} from '../common/index'
import {NewestList, BeforeList} from '../Api'
import HomeHeader from '../components/HomeHeader'
import Separator from '../components/Separator'
import LoadingMoreAnim from '../components/LoadingMoreAnim'
import {screen, utils} from "../common";

export default class Home extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: false,
            stories: [],
            top_stories: [],
            sectionsData: [],
            loadMore: false,
            nowBeforeDay: ''
        };
    }

    componentDidMount() {
        const beforeDay = utils.dateToDateStr(Date.now());
        this._getBeforeData(beforeDay)
        this._getInitData()
    }

    _getInitData() {
        Fetch(NewestList).then(res => {
            this.setState({
                isRefreshing: false,
                stories: res.stories,
                top_stories: res.top_stories
            })
        })
    }

    _getBeforeData(day) {
        Fetch(BeforeList + day).then(res => {
            console.log(res)
            let beforeSectionData = [{
                title: utils.getSectionDate(res.date),
                data: res.stories
            }];
            this.setState({
                loadMore: false,
                nowBeforeDay: res.date,
                sectionsData: this.state.sectionsData.concat(beforeSectionData)
            })
            console.log(this.state.sectionsData)
        })
    }

    onRefresh() {
        this.setState({isRefreshing: true});
        this._getInitData()
    }

    _onScroll(event) {
        if (this.state.loadMore) {
            return;
        }
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        console.log('offsetY-->' + y);
        console.log('height-->' + height);
        console.log('contentHeight-->' + contentHeight);
        if (y + height >= contentHeight) {
            console.log(121212)

            this.setState({
                loadMore: true
            });
            this._getBeforeData(this.state.nowBeforeDay)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <TouchableOpacity>
                        <Text style={{color:'#ffffff'}} onPress={()=>this.props.navigation.openDrawer()}>侧边栏</Text>
                    </TouchableOpacity>
                    <Text  style={{color:'#ffffff',fontSize:18}}>今日热文</Text>
                    <Text></Text>
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                            tintColor='gray'
                            title={this.state.isRefreshing ? '刷新中....' : '下拉刷新'}
                        />
                    }
                    onScroll={this._onScroll.bind(this)}
                    scrollEventThrottle={50}
                >
                    <View style={{height: 200}}>
                        <HomeHeader ImageList={this.state.top_stories}/>
                    </View>
                    <FlatList
                        ItemSeparatorComponent={() => (<Separator/>)}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.stories}
                        renderItem={this.renderItem}
                    />
                    <SectionList
                        sections={this.state.sectionsData}
                        ItemSeparatorComponent={() => (<Separator/>)}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItem}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    />
                    {this.state.loadMore && <LoadingMoreAnim/>}
                </ScrollView>
            </View>
        );
    }

    renderItem({item}) {
        return (
            <View key={item.id} style={styles.flatListView}>
                <View style={styles.rightListContainer}>
                    <Text style={{fontSize: 16}}>
                        {item.title}
                    </Text>
                </View>
                <Image source={{uri: item.images[0]}} style={styles.flatListImage}/>
            </View>
        )
    }
}
// 默认属性
Home.defaultProps = {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    topBar: {
        position: 'absolute',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex:200,
        top:20,
        right:0,
        padding:10,
        width:screen.width
    },
    flatListView: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#ffffff'
    },
    rightListContainer: {
        flex: 1,
    },
    flatListImage: {
        width: screen.width / 5,
        height: screen.height / 9
    },
    sectionHeader: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        backgroundColor: '#0593d3',
    },
})