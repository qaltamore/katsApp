import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Content, Text, View, Button, Icon, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
import { setCurrentKat } from '../redux/kat/actions'
import allKats from '../librairies/allKats'

class Shop extends React.Component {

    constructor(props) {
        super(props)
        this.setMyCurrentKat = this.setMyCurrentKat.bind(this)
        this.katImagesFromApi = ["Katfirst", 'Nero']
    }

    static navigationOptions = { title: 'Kats', header: null }
    
    setMyCurrentKat(kat) {
        this.props.setKat(kat)
    }

    componentDidUpdate() {
        console.log(this.props.kat)
    }

    render() {
        const {navigate} = this.props.navigation;
        
        console.log("test : ", this.props.kat)

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
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text>Achetez des Kats</Text>
                        <List dataArray={this.katImagesFromApi} renderRow={(kat) => 
                            <ListItem onPress={() => this.setMyCurrentKat(kat)}>
                                <Image style={{ width: 100, height: 100 }} source={allKats[kat]}/>
                            </ListItem>
                        }/>
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
    },
    buttonImg: {
        width: 200,
        height: 200,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: 'white',
        elevation: 0
    }
})

//on connecte notre state global au state du composant
const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => ({
    setKat: kat => {
        dispatch(setCurrentKat(kat))
    }
})

//on se connecte au store global
export default connect(mapStateToProps, mapDispatchToProps)(Shop)
