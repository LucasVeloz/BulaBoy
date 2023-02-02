import { TouchableOpacityProps } from "react-native";

export interface IItem extends TouchableOpacityProps {
  name: string;
  maker: string;
}
