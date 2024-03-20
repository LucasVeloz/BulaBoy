import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const SaveContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Ionicons).attrs({
  color: 'white',
  size: 14,
})``;
