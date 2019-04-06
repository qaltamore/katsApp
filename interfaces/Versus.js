import React from 'react'
import { Container, Content, Text, View, Icon, Button } from 'native-base'
import { StyleSheet } from 'react-native'

export default class Versus extends React.Component {

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
                        <Text>Vous avez attaqué</Text>
                        <Text>Vous avez dépensé 1 point d'énergie</Text>
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
