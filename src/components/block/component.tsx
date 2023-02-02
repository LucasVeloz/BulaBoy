import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { Container, InvisibleBlock, Text } from './styles';
import { IBlock } from './types';

export const Block = ({ title, icon, onPress }: IBlock) => {
  return (
    <Container onPress={onPress}>
      <MaterialIcons name={icon} size={22} />
      <Text>{title}</Text>
      <InvisibleBlock />
    </Container>
  )
}
