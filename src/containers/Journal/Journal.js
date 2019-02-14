import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert
} from 'react-native';
import { Logo } from '../../components/Logo/Logo';

import { DefaultButton } from '../../components/Button/Button.js';

export default class Journal extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleSubmit = () => {
    Alert.alert(this.state.text);
  };

  render() {
    return (
      <View style={styles.view}>
        <Logo />
        <Text style={styles.text}>Feburary 14th, 2019</Text>
        <TouchableHighlight>
          <TextInput
            editable={true}
            autoFocus={true}
            style={styles.input}
            multiline={true}
            keyboardAppearance="dark"
            onSubmitEditing={Keyboard.dismiss}
            scrollEnabled={true}
            placeholder="Start writing here..."
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </TouchableHighlight>
        <TouchableOpacity>
          <DefaultButton title="Save entry" onPress={this.handleSubmit} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 5
  },
  text: {
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    fontSize: 20
  },
  input: {
    borderColor: '#daa520',
    borderWidth: 5,
    fontSize: 20,
    height: 400,
    marginLeft: 15,
    marginRight: 15
  },
  button: {
    marginTop: 50,
    fontSize: 20
  }
});
