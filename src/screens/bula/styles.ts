import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  z-index: 1;
  position: absolute;
  padding: ${getStatusBarHeight() + 40}px 20px 0;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

