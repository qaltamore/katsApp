import React from 'react';
import { Root, View, Text } from 'native-base'
import AppStackNavigator from './navigation/AppStackNavigator'
import { createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux'

const store = createStore(reducer)

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
        }
        this.loadFonts();
    }

    async loadFonts() {
        try {
            await Expo.Font.loadAsync({
                'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
                'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
            });
    
            this.setState({ fontsLoaded: true });
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        const AppContainer = createAppContainer(AppStackNavigator)
        const fontsLoaded = this.state.fontsLoaded;

        if (fontsLoaded) {
            return (
                <Provider store={store}>
                    <Root>
                        <AppContainer />
                    </Root>
                </Provider>
            )
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
    }
}
