import { MaterialCommunityIcons } from '@expo/vector-icons'
import { NavigationList } from '../../routes'


export type SearchType = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  navigation: keyof NavigationList
}
