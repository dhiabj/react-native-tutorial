import { View, Text, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 20,
        padding: 10,
      }}>
      <Text
        style={{
          color: 'purple',
          fontSize: 18,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
