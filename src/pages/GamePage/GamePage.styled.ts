import styled from 'styled-components';
import colors from '../../constants/colors';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

export const Title = styled.div`
  font-size: 3rem;
  color: ${colors.character};
  margin-bottom: 1rem;
`;
export const Subtitle = styled.div`
  font-size: 2rem;
  color: ${colors.character};
  margin-bottom: 2rem;
`;