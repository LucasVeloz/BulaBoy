import { MaterialIcons } from "@expo/vector-icons";

export interface IBlock {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
}
