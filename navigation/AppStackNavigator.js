import { createStackNavigator } from 'react-navigation'
import Home from '../interfaces/Home'
import Attacks from '../interfaces/Attacks'
import Shop from '../interfaces/Shop'
import Versus from '../interfaces/Versus'

const AppStackNavigator = createStackNavigator({
    Home,
    Attacks,
    Shop,
    Versus
},
{
    initialRouteName: 'Home'
})

export default AppStackNavigator