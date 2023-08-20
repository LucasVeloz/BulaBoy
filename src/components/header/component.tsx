import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Block, Container, Icon, Title } from './styles';
import { IHeader } from './types';
export const Header = ({ title }: IHeader) => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <Icon />
      </TouchableOpacity>
      <Title>{title}</Title>
      <Block />
    </Container>
  );
}
