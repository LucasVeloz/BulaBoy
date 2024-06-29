import styled from "styled-components/native";
import { dynamicFontSize } from "../../utils";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  padding: 64px 20px 0;
`;

export const ScrollContainer = styled.ScrollView`
  background: ${({ theme }) => theme.colors.white};
  padding: 64px 20px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${dynamicFontSize(24)}px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 38px;
`;

export const SectionText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${dynamicFontSize(20)}px;
  color: ${({ theme }) => theme.colors.black};
  margin: 48px 0 32px;
`;

export const HeroSection = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Separator = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

export const CreateMedContainer = styled.Pressable`
  padding: 20px;
  flex: 1;
`;
