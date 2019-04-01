import { createStackNavigator } from 'react-navigation'
import Home from '../interfaces/Home'
import Attacks from '../interfaces/Attacks'
import Shop from '../interfaces/Shop'

const AppStackNavigator = createStackNavigator({
    Home,
    Attacks,
    Shop
},
{
    initialRouteName: 'Home'
})

export default AppStackNavigator