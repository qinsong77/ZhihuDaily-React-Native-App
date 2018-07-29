import {Dimensions,PixelRatio} from 'react-native'
console.log('width:'+Dimensions.get('window').width)
console.log('height:'+Dimensions.get('window').height)
export default {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    onePixel:1/PixelRatio.get(),
    pageHeader:50
}