import { useState } from "react";

function useGamePage() {
  const SIZE = 20;

  const getRandPos = () => {
    return [Math.floor(Math.random() * SIZE), Math.floor(Math.random() * SIZE)];
  }

  const grid = Array(SIZE).fill(0).map(() => new Array(SIZE).fill(0));
  const [character, setCharacter] = useState(getRandPos())
  const [food, setFood] = useState(getRandPos())

  const spawnFood = () => {
    if(character[0] == food[0] && character[1] == food[1]){
      setFood(getRandPos());
    }
  }

  const moveCharacter = (e: any) => {
    e = e || window.event;
    if (e.keyCode == '38') {
      if(character[0]>0){
        setCharacter([character[0]-1, character[1]])
      }
    }
    else if (e.keyCode == '40') {
      if(character[0]<SIZE-1){
       setCharacter([character[0]+1, character[1]])
      }
    }
    else if (e.keyCode == '37') {
      if(character[1]>0){
        setCharacter([character[0], character[1]-1])
      }
    }
    else if (e.keyCode == '39') {
      if(character[1]<SIZE-1){
        setCharacter([character[0], character[1]+1])
      }
    }
  }


  return { grid, character, food, spawnFood, moveCharacter };
}

export default useGamePage;