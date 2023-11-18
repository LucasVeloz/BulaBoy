import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 20}px;
`;


export const HeaderContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  padding: 40px 20px;
  flex-direction: row;
  align-items: center;
`;

export const InputContainer = styled.View`
  flex: 1;
  margin-left: 20px;
`;
