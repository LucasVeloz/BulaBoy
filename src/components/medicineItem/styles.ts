import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { dynamicFontSize } from '../../utils';
import { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  border-bottom-width: 1px;
  border-bottom-color: #c4c4c4;
`;

export const Block = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const MedicineName = styled(Animated.Text)`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(16)}px;
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary};
  `};
`;

export const Schedule = styled.Text`
  ${({ theme }) => css`
    font-size: ${dynamicFontSize(12)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary};
  `};
`;

export const Arrow = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.black
}))``;

export const Icon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  color: theme.colors.tertiary,
  size: 12
}))``

