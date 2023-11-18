import { TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, TextInput } from './styles';


export const Input = ({ ...rest }: TextInputProps) => {
  const theme = useTheme();
  return (
    <Container>
      <MaterialIcons
        name='search'
        color={theme.colors.primary}
        size={20}
      />
      <TextInput
        placeholderTextColor={theme.colors.black}
        {...rest}
      />
    </Container>
  )
}
