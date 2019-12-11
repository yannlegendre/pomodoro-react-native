import React from 'react';
import { Text, View, StyleSheet, Button, Vibration, Alert } from 'react-native';
import Constants from 'expo-constants';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState
  }

  defaultState = {
    mode: 'Work',
    seconds: this.props.duration,
    running: false,
    playButtonText: 'Start'
  }

  handlePlayPause = () => {
    if (this.state.running) {
      this.stopCountDown()
      this.setState( { playButtonText: this.defaultState.playButtonText})
    } else {
      this.startCountDown()
      this.setState( { playButtonText: 'Pause'})
    }
    this.setState(previousState => (
      { running: !previousState.running }
    ))
  }

  startCountDown = () => {
    this.myInterval = setInterval( () => {
      this.setState( {
        seconds: this.state.seconds - 1
      })
      if (this.state.seconds === 0) {
        Vibration.vibrate()
        const currentMode = this.state.mode
        this.stopCountDown()
        this.resetTimer()
        this.switchMode(currentMode)
        Alert.alert("Info", `Finished, now time to ${this.state.mode.toLowerCase()}`)
      }
    }, 1000)
  }

  switchMode = (mode) => {
    if (mode === 'Work') {
      this.setState({mode: 'Rest'})
    } else {
      this.setState({mode: 'Work'})
    }
  }

  stopCountDown = () => {
    if (this.myInterval) clearInterval(this.myInterval)
  }

  resetTimer = () => {
    this.stopCountDown()
    this.setState(this.defaultState)
  }

  readableTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    let sec = timeInSeconds - minutes * 60
    if (sec < 10) sec = `0${sec}`
    return `${minutes}:${sec}`
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {`${this.state.mode} time !`}
        </Text>
        <Text style={styles.timer}>
          {this.readableTime(this.state.seconds)}
        </Text>
        <View style={styles.navigation}>
          <Button onPress={this.handlePlayPause} title={this.state.playButtonText}/>
          <Button onPress={this.resetTimer} title="Reset"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timer: {
    fontSize: 72,
    textAlign: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },
});
