import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import Timer from './timer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 25*60,
      restTime: 5*60,
    }
  }

  changeWorkTime = (workTime) => {
    this.setState({workTime})
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer workTime={this.state.workTime} restTime={this.state.restTime} />
        <View>
          <TextInput
            placeholder="Work time in minutes"
            underlineColorAndroid='transparent'
            style={styles.TextInputStyle}
            keyboardType={'numeric'}
            // onChangeText={this.changeWorkTime}
            // value={this.state.workTime.toString()}
          />
          <TextInput
            placeholder="Rest time in minutes"
            style={styles.TextInputStyle}
            keyboardType={'numeric'}
          />
        </View>
      </View>
    );
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
  TextInputStyle: {
      textAlign: 'center',
      height: 40,
      borderRadius: 10,
      marginTop: 40
  },
})

