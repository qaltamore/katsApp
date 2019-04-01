import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Content, Text, View, Button, Icon } from 'native-base'

export default class Attacks extends React.Component {

    constructor(props) {
        super(props)
    }

	static navigationOptions = { title: 'Kats', header: null }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container>
                <Content>
                    <View style={styles.homeButton}>
                        <Button light onPress={() => navigate('Home')}>
                            <Icon name='home' />
                        </Button>
                    </View>
                    <View>
                        <Text>Vos Kats</Text>
                        <Image source=""/>
                    </View>
                    <View>
                        <Text>Achetez des Kats</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    homeButton: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 15,
        marginRight: 15
    }
})
