import React from 'react'
import { StyleSheet, Image, AsyncStorage } from 'react-native'
import { Container, Content, Text, Button, View, Icon } from 'native-base'
import katsImages from '../librairies/allKats'
import otherImages from '../librairies/otherImages'
import Stat from '../components/Stat'
import { connect } from 'react-redux'
import { setCurrentKatEnergy } from '../redux/kat/actions'

class Home extends React.Component {

		constructor(props) {
				super(props)
		}

		static navigationOptions = { title: 'Kats', header: null }

		testHttpRequest() {
			/*fetch('http://192.168.43.224:2999/testPost', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					testId: '10',
				}),
			});*/
		}

		render() {
				const {navigate} = this.props.navigation

				var level = "36"
				var affection = "8"
				var maxEnergy = "10"

				var currentKat
				var currentKatEnergy

				if(this.props.kat.katName == null)
						currentKat = 'Nero'
				else
						currentKat = this.props.kat.katName

				console.log(this.props.kat.energy)
				if(this.props.kat.energy == null)
						currentKatEnergy = 1
				else
						currentKatEnergy = this.props.kat.energy

				/*setTimeout(function() {
						setInterval(function() {
								console.log("Test")
						}, 1000)
				}, 5000)*/
						
				return (
					<Container>
							<Content>
									<View style={styles.container}>
											<View style={styles.katsContainer}>
													<View style={styles.containerBeforeImg}>
															<Text style={{ flex: 1, marginTop: 5 }}>Niveau : {level}</Text>
															<View style={styles.energyContainer}>
																	<Icon name='flame'></Icon><Text> {currentKatEnergy}/{maxEnergy}</Text>
															</View>
													</View>
													<View style={styles.katImgContainer}>
															<Image source={ katsImages[currentKat] } style={styles.katImg} />
													</View>
													<View style={styles.containerAfterImg}>
															<Icon name='paw'></Icon><Text> {affection}</Text>
													</View>
													<View style={styles.containerIcons}>
															<Button style={styles.backgroundButton} onPress={() => navigate('Shop')}>
																	<Image source={ otherImages['01'] } style={styles.iconsImg} />
															</Button>
															<Button style={styles.backgroundButton} onPress={() => navigate('Versus')}>
																	<Image source={ otherImages['02'] } style={styles.iconsImg} />
															</Button>
															<Button style={styles.backgroundButton} onPress={this.testHttpRequest}>
																	<Image source={ otherImages['03'] } style={styles.iconsImg} />
															</Button>
															<Button style={styles.backgroundButton} >
																	<Image source={ otherImages['04'] } style={styles.iconsImg} />
															</Button>
															<Button style={styles.backgroundButton} onPress={() => navigate('Attacks')}>
																	<Image source={ otherImages['05'] } style={styles.iconsImg} />
															</Button>
													</View>
											</View>
											<View style={styles.statsContainer}>
													<Stat statName={'PDV'} statProgress={0.8} statNumber={500}></Stat>
													<Stat statName={'ATK'} statProgress={0.5} statNumber={25}></Stat>
													<Stat statName={'SPA'} statProgress={0.9} statNumber={40}></Stat>
													<Stat statName={'DEF'} statProgress={0.4} statNumber={10}></Stat>
													<Stat statName={'SPD'} statProgress={0.8} statNumber={20}></Stat>
													<Stat statName={'VIT'} statProgress={0.7} statNumber={800}></Stat>
											</View>
									</View>
							</Content>
					</Container>
				)
		}
}

//on connecte notre state global au state du composant
const mapStateToProps = (state) => {
	return state
}

//on se connecte au store global
export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
		container: {
				display: 'flex',
				flexDirection: 'column',
				padding: 30
		},
		katsContainer: {
				display: 'flex',
				flexDirection: 'column',
				marginBottom: 30
		},
		containerBeforeImg: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				marginBottom: 15
		},
		katImgContainer: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center'
		},
		energyContainer: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'flex-end',
				justifyContent: 'flex-end',
				flex: 1
		},
		containerAfterImg: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'flex-end',
				justifyContent: 'flex-end',
				marginBottom: 15
		},
		containerIcons: {
				display: 'flex',
				flexDirection: 'row',
				flex: 1,
				justifyContent: 'space-between'
		},
		statsContainer: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'space-between'
		},
		katImg: {
				width: 200,
				height: 200,
				marginBottom: 15,
				alignItems: 'center'
		},
		iconsImg: {
				width: 50,
				height: 50
		},
		backgroundButton: {
				backgroundColor: 'white',
				elevation: 0
		}
});
