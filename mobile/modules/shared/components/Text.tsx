import React from 'react';
import type { TextProps } from 'react-native';
import { Text as RNText } from 'react-native';

type Props = {
  fontFamily?: 'Manrope-Regular' | 'Manrope-Bold' | 'Manrope-Medium';
} & TextProps;

const Text = ({ fontFamily = 'Manrope-Regular', style, ...props }: Props) => {
  return (
    <RNText {...props} style={[{ fontFamily }, style]}>
      {props.children}
    </RNText>
  );
};

export default Text;
