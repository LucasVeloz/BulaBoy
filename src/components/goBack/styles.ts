import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
