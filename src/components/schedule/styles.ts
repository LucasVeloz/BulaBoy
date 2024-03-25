import styled, { css } from 'styled-components/native';
import { dynamicFontSize } from '../../utils';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  width: 50%;
  align-self: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 24px 0;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 40px;
    width: 40px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
  `}
`;

export const Content = styled.View`
  background-color: white;
  border-radius: 32px;
  align-items: center;
  padding: 20px 0;
`;

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(32)}px;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.bold};
    letter-spacing: 5px;
  `}
`;


export const Icon = styled(Ionicons)`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(24)}px;
    color: ${theme.colors.white};
  `}
`;
