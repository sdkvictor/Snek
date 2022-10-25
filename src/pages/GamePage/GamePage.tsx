import React, { useEffect } from 'react';
import Board from '../../components/Board';
import { Content, Subtitle, Title } from './GamePage.styled';
import useGamePage from './useGamePage';

function GamePage() {

  const { grid, character, food, spawnFood, moveCharacter } = useGamePage();

  useEffect(() => {
    spawnFood();
  });

  document.onkeydown = moveCharacter;

  return (
    <Content>
      <Title>Snek</Title>
      <Subtitle>Use the arrow keys to move!</Subtitle>
      <Board food={food} character={character} grid={grid} />
    </Content>
  );
}

export default GamePage;