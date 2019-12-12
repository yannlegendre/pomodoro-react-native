import React from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

export default class TimerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workTime: '',
      isFormValid: false
    }
  }

  // getHandler = key =>  val => {
  //   this.setState({[key]: val})
  // }

  // avant d'utiliser directement gethandler
  // changeWorkTime = this.getHandler('name')

  handleWorkTimeChange = (input) => {
    if (input === '' || /^\d+$/.test(input)) {
      this.setState({workTime: input})
    }
  }

  validateForm = () => {
    if (this.state.workTime > 0) {
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid: false})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.workTime !== prevState.workTime)
      this.validateForm()
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
          onChangeText={this.handleWorkTimeChange}
          value={this.state.workTime.toString()}
        />
        <Button title="submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
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
      textAlign: 'center'
    },
});
