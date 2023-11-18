import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { goBack } from '../../services';

import { Container } from './styles';

export const GoBack = () => {
  return (
    <Container onPress={goBack}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={32}
        color="white"
      />
    </Container>
  )
}
