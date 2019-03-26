import { createStackNavigator } from 'react-navigation'
import Home from '../interfaces/Home'

const AppStackNavigator = createStackNavigator({
    Home
},
{
    initialRouteName: 'Home'
})

export default AppStackNavigator