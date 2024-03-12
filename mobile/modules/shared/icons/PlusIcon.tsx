import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlusIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 20 20" width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M10.278 2.583V18.14M2.5 10.361h15.556"
    />
  </Svg>
);
export default PlusIcon;
