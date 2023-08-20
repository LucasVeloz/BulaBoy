import { Container, Subtitle, Title } from './styles';
import { IItem } from './types';

export const Item = ({ name, maker,...rest }: IItem) => {
  return (
    <Container {...rest}>
      <Title>{name}</Title>
      <Subtitle>{maker}</Subtitle>
    </Container>
  );
}
