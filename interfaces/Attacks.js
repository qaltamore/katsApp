import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text, View, List, ListItem, Button, Icon } from 'native-base'

export default class Attacks extends React.Component {

    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.state = {
            attacks: [],
            yourAttacks: ["Griffure", "Flamme", "Bouclier", "Intimidation", "Gros Yeux", "Psycho"]
        }
    }

	static navigationOptions = { title: 'Kats', header: null }

    toggleView(attacks) {
        this.setState({ attacks })
    }

    render() {
        const {navigate} = this.props.navigation
        
        //192.168.43.224
        //172.16.2.220
        fetch('http://192.168.43.224:2999/getAttacks', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.toggleView(responseJson) 
        })
        .catch((error) => {
            console.log("error : ", error)
        })

        var row = this.state.yourAttacks.map((attack, key) => {
            return (
                <View key={key} style={{ marginTop: 10 }}>
                    <Button style={{ backgroundColor: 'white', width: 150 }}>
                        <Text style={{ color: 'black', flex: 1, textAlign: 'center' }}>{attack}</Text>
                    </Button>
                </View>
            )
        })

        return (
            <Container>
                <Content>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <View style={styles.homeButton}>
                            <Button light onPress={() => navigate('Home')}>
                                <Icon name='home' />
                            </Button>
                        </View>
                        <View>
                            <Text style={{ marginLeft: 15, fontWeight: 'bold' }}>Tes Attaques</Text>
                            <View style={{ alignItems: 'center' }}>
                                {row}
                            </View>
                        </View>
                        <View>
                            <Text style={{ marginLeft: 15, marginTop: 15, fontWeight: 'bold' }}>Toutes les Attaques</Text>
                            <List dataArray={this.state.attacks} renderRow={(attack) =>
                                <ListItem><Text>{attack}</Text></ListItem>
                            } />
                        </View>
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
