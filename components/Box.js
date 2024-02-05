import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Box({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
