import styled from "styled-components/native";
import { dynamicFontSize } from "../../utils";

export const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  right: -40px;
  right: 20px;
  width: 200px;
  height: 64px;
  border-radius: 32px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${dynamicFontSize(20)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;
