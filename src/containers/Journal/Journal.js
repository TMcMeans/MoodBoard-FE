import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Keyboard
} from 'react-native';
// import Logo from '../../components/Logo/Logo';

import { DefaultButton } from '../../components/Button/Button.js';

export default class Journal extends Component {
  render() {
    return (
      <View style={styles.view}>
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
          />
        </TouchableHighlight>
        <TouchableOpacity>
          <DefaultButton title="Save entry" style={styles.button} />
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
  input: {
    borderColor: 'black',
    borderWidth: 5,
    fontSize: 20,
    height: 400,
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 10,
    fontSize: 30
  }
});
