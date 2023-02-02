import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Block } from '../../components';

import { renderTextByHash } from '../../utils/';

import { MENU_ITEMS } from './items';

import { Container, ContentBlock, Subititle, Title } from './styles';
import { useForegroundPermissions } from 'expo-location';

export const Menu = () => {
  const { navigate } = useNavigation();
  const [status, requestLocation] = useForegroundPermissions();

  return (
    <Container>
      <Title>{renderTextByHash('greeting-title')}</Title>
      <Subititle>{renderTextByHash('greeting-text')}</Subititle>
      <ContentBlock>
      {MENU_ITEMS.map(item => (
        <Block
          key={item.title}
          icon={item.icon}
          title={item.title}
          onPress={async () => {
            if (item.navigation === 'mapSearch' && !status?.granted) {
                const { granted } = await requestLocation();
                if (granted) {
                  navigate(item.navigation);
                }
            } else {
              navigate(item.navigation);
            }
          }}
        />
      ))}
      </ContentBlock>
    </Container>
  );
}
