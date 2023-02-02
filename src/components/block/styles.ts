import styled from 'styled-components/native';
import { dynamicFontSize } from '../../utils';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const InvisibleBlock = styled.View`
  width: 22px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${dynamicFontSize(18)}px;
  color: ${({ theme }) => theme.colors.black};
  max-width: 200px;
  text-align: center;
`
