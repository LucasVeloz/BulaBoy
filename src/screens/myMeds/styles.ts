import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';
import { dynamicFontSize } from '../../utils';

export const Container = styled.View`
`;

export const HeaderContainer = styled.View`
  padding: 0 20px;
  height: 200px;
  background: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const block = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(24)}px;
    font-family: ${theme.fonts.bold};
    text-align: right;
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(20)}px;
    font-family: ${theme.fonts.regular};
    margin-top: 16px;
    text-align: right;
  `};
`;
