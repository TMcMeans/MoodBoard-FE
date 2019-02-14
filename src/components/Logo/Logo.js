import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Logo = () => {
  return <Text style={styles.logo}>MoodBoard</Text>;
};

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 30
  }
});
