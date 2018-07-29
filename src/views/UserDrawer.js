import React,{Component} from 'react'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {StyleSheet,ScrollView,Text,View} from 'react-native'
export default  UserDrawer = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            {/*<DrawerItems {...props} />*/}
            <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor:'#000'}}>
                <Text style={{color:'#FFF'}}>ser Name</Text>

            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});