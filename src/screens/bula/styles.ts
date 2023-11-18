import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  position: absolute;
  top: ${getStatusBarHeight() + 20}px;
  left: 20px;
  z-index: 1;
`;
