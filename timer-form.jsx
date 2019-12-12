import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

export default class TimerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workTime: '',
    }
  }

  changeWorkTime = (workTime) => {
    this.setState({workTime})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({workTime: ''})
  }

  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Work time in minutes"
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle}
          keyboardType={'numeric'}
          onChangeText={this.changeWorkTime}
          value={this.state.workTime.toString()}
        />
        <Button title="submit" onPress={this.handleSubmit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TextInputStyle: {
      textAlign: 'center',
      height: 40,
      borderRadius: 10,
      marginTop: 40
  },
    formContainer: {
      width: 100,
      textAlign: 'center'
    },
});
