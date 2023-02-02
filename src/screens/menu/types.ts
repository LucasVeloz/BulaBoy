import { MaterialIcons } from "@expo/vector-icons";

export type IMenuItems = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  navigation: string;
}
