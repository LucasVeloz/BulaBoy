import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface IBlock {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress: () => void;
}
