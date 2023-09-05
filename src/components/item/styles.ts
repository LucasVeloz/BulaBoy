import styled from 'styled-components/native';
import { dynamicFontSize } from '../../utils';

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 30px 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${dynamicFontSize(20)}px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${dynamicFontSize(16)}px;
  color: ${({ theme }) => theme.colors.white};
`
