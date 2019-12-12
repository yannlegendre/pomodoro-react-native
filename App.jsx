import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import Timer from './timer'
import TimerForm from './timer-form'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 25*60,
    }
  }

  updateWorkTime = (time) => {
    this.setState(prevState => ({...prevState, workTime: time.workTime * 60}))
    console.log(this.state)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Timer workTime={this.state.workTime} />
        <TimerForm onSubmit={this.updateWorkTime}/>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
})

