import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';
import { IBlock } from './types';
import { useTheme } from 'styled-components/native';

export const Block = ({ icon, onPress }: IBlock) => {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={32} color={theme.colors.primary} />
    </Container>
  )
}
