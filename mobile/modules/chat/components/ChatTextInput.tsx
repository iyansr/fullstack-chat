import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const ChatTextInput = () => {
  return (
    <TextInput placeholder="Send a message" style={styles.input} placeholderTextColor="#B4B4B4" />
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 16,
    fontSize: 14,
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 99,
    backgroundColor: 'rgba(14, 4, 34, 0.5)',
    borderWidth: 1,
    borderColor: '#5E5E5E',
    flex: 1,
    includeFontPadding: false,
    fontFamily: 'Manrope-Medium',
  },
});

export default ChatTextInput;
