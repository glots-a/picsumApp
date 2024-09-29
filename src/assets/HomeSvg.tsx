import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

type HomeSvgProps = SvgProps & {
  focused: boolean;
};

export const HomeSvg = ({focused, ...props}: HomeSvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    {...props}
    fill={focused ? '#FDFDFD' : '#B3BABE'}>
    <Path d="M3.018 10.982 3 11h2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h2l-.018-.018a.986.986 0 0 0 .85-.427 1 1 0 0 0-.278-1.387l-9-6a1 1 0 0 0-1.11 0L8 5.465V4a1 1 0 0 0-2 0v2.8L2.446 9.168a1 1 0 0 0-.278 1.387.983.983 0 0 0 .85.427ZM14 19h-4v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-4-8h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z" />
  </Svg>
);
