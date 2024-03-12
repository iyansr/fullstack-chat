import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

type AvatarProps = {
  style?: StyleProp<ViewStyle>;
  size?: number;
};

const Avatar = ({ style, size = 32 }: AvatarProps) => {
  return <View style={[styles(size).avatar, style]} />;
};

const styles = (size: number) =>
  StyleSheet.create({
    avatar: {
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: '#FC9393',
    },
  });

export default Avatar;
