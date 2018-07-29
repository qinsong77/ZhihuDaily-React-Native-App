import {Platform, ToastAndroid} from 'react-native';

const TIMEOUT = 10000;

const Fetch = (url, method = 'GET') => {

    let request = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    // url = url.replace(/([^:])\/\//, '$1/');

    if (__DEV__) {
        console.log('发起请求->', url);
    }

    return new Promise((resolve, reject) => {
        let httpStatus = 200;
        let errMsg = '';
        let timeOut = setTimeout(() => {
            errMsg = "抱歉，网络超时-_-!";
            handleError(errMsg);
            reject(errMsg);
        }, TIMEOUT);
        fetch(url, request).then((res) => {
            clearTimeout(timeOut);
            httpStatus = res.status;
            return res.json();
        }).then((res) => {
            if (__DEV__)
                console.log(url+":res===>", res);
            // console.log("res==httpStatus=>", httpStatus);
            if (httpStatus >= 200 && httpStatus < 300) {
                resolve(res);
            } else {
                reject(res);
            }
        }).catch((err) => {
            clearTimeout(timeOut);
            errMsg = "抱歉，网络错误0_0!";
            handleError(errMsg);
            reject(errMsg);
        }).done();
    });
}

function handleError(err) {
    Platform.select({
        ios:null,
        android:ToastAndroid.show(err, ToastAndroid.SHORT)
    })
}
export  default Fetch;