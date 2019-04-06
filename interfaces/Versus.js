import React from 'react'
import { Container, Content, Text, View, Icon, Button } from 'native-base'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setCurrentKatEnergy } from '../redux/kat/actions'

class Versus extends React.Component {

    constructor(props) {
        super(props)
        this.setMyCurrentKatEnergy = this.setMyCurrentKatEnergy.bind(this)
    }

    static navigationOptions = { title: 'Kats', header: null }

    componentDidUpdate() {
        console.log("updated : ", this.props.kat)
    }

    setMyCurrentKatEnergy() {
        console.log("actuel : ", this.props.kat)
        this.props.setEnergy(8)
    }

    render() {
        const {navigate} = this.props.navigation

        return (
            <Container>
                <Content>
                    <View style={styles.homeButton}>
                        <Button light onPress={() => navigate('Home')}>
                            <Icon name='home' />
                        </Button>
                    </View>
                    <View>
                        <Button onPress={() => this.setMyCurrentKatEnergy()}><Text>Test</Text></Button>
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

//on connecte notre state global au state du composant
const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => ({
    setEnergy: energy => {
        dispatch(setCurrentKatEnergy(energy))
    }
})

//on se connecte au store global
export default connect(mapStateToProps, mapDispatchToProps)(Versus)
