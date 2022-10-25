import styled from 'styled-components';
import colors from '../../constants/colors';

const handleFillColor = (value:number) => {
  switch (value) {
    case 1:
      return colors.character;
    case 2:
      return colors.food;
    default:
      return colors.cell;
  }
};

export const BoardStyled = styled.div`
  outline: 1px solid;
  outline-color: ${colors.board};
`;

export const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
`;

export const CellStyled = styled.div<{ value: number }>`
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-color: ${colors.board};
  background-color: ${({ value }) => handleFillColor(value)};
`;