import styled, { css } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'
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

export const block = styled.View`
  max-width: 85%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(20)}px;
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

export const BulaButton = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const BulaButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(20)}px;
    font-family: ${theme.fonts.medium};
    margin-right: 16px;
  `};
`;

export const Icon = styled(Ionicons)`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(20)}px;
    color: ${theme.colors.primary};
  `};
`;

export const IconGo = styled(Ionicons)`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(24)}px;
    color: ${theme.colors.primary};
    margin-left: auto;
  `};
`;

export const SchedulerHeader = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SchedulerHeaderText = styled.Text`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(20)}px;
    font-family: ${theme.fonts.medium};
    margin-right: 16px;
    max-width: 60%;
  `};
`;
