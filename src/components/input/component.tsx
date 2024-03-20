import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { InputProps } from './types';

import * as S from './styles';



export const Input = ({ useKeyboardTextInput, ...rest }: InputProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <MaterialIcons
        name='search'
        color={theme.colors.primary}
        size={20}
      />
      {useKeyboardTextInput ? (
        <S.KeyboardTextInput
          placeholderTextColor={theme.colors.black}
          {...rest}
        />
      ) : (
        <S.TextInput
        placeholderTextColor={theme.colors.black}
        {...rest}
        />
        )}
    </S.Container>
  )
}
