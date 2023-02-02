import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { dynamicFontSize } from '../../utils';

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 48px 24px 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(MaterialIcons).attrs({
  name: 'arrow-back',
  size: 24,
})`
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${dynamicFontSize(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Block = styled.View`
  width: 24px;
`;
