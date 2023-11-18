import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import { Container, Subtitle, Title, pillStyle } from './styles';
import { IItem } from './types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export const Card = ({ name, maker, index,...rest }: IItem) => {
  const theme = useTheme();
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)}
      exiting={FadeOut.delay(index * 100)}
    >
    <Container {...rest}>
      <Title>{name}</Title>
      <Subtitle>{maker}</Subtitle>
      <MaterialCommunityIcons
        name="pill"
        size={32}
        color={theme.colors.tertiary}
        style={pillStyle}
      />
    </Container>
    </Animated.View>
  );
}
