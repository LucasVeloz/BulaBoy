import styled from 'styled-components/native';
import { dynamicFontSize } from '../../utils';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${dynamicFontSize(24)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 32px;
  margin-bottom: 44px;
`;


export const Subititle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${dynamicFontSize(16)}px;
  color: ${({ theme }) => theme.colors.black};
`

export const ContentBlock = styled.View`
  margin-top: 80px;
  justify-content: space-between;
`;
