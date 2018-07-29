import {createStackNavigator, createDrawerNavigator} from 'react-navigation'
import Home from './views/Home'
import Detail from './views/Detail'
import Second from './views/Second'
import UserDrawer from './views/UserDrawer'

const subNav = createStackNavigator({
        home: {
            screen: Home, // 还有这里 <-----------------------------------------------------------
            navigationOptions: {
                // title: 'home'
                header:null
            }
        },
        Detail: {
            screen: Detail,
            navigationOptions: {
                title: 'Detail'
            }
        },
    }
    , {
        initialRouteName: 'home',
        navigationOptions: ({navigation, screenProps}) => ({
            gesturesEnabled: true,
        }),
    })

const homeDrawer = createDrawerNavigator(
    {
        Home: subNav,
        // SecondHome:subNav
    },
    {
        drawerWidth: 260,
        drawerPosition: 'left',
        contentComponent: UserDrawer,
        initialRouteName:'Home',
        contentOptions: {
            initialRouteName: 'Home'
        }
    }
)


export default homeDrawer