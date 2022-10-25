import React, { useState } from 'react';
import { BoardStyled, CellStyled, RowStyled } from './Board.styled';

export interface BoardProps {
  // title: string;
  // color?: 'primary' | 'secondary';
  // onClick?: () => void;
  grid: Array<Array<number>>;
  character: Array<number>;
  food: Array<number>;
}

function Board({ grid, character, food }: BoardProps) {
  return (
    <BoardStyled >
      {grid.map((row, rowIndex) => (
        <RowStyled key={rowIndex}>
          {row.map((cell, cellIndex)=> (
            (rowIndex == character[0] && cellIndex == character[1] ?
              <CellStyled value={1} key={cellIndex}/> 
              :
              (rowIndex == food[0] && cellIndex == food[1] ? 
                <CellStyled value={2} key={cellIndex}/>
                : <CellStyled value={cell} key={cellIndex}/>)
              )
          ))}
        </RowStyled>
      ))}
    </BoardStyled>
  );
}

export default Board;