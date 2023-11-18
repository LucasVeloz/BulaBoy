import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 24px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-radius: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 20px;
`;
