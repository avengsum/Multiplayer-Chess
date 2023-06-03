import { Chessboard } from 'react-chessboard';
import {Chess} from 'chess.js'
import { useState } from 'react';

const ChessUI = () => {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare,setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);

  const handleSquareClick = (square) => {
    if (selectedSquare) {
     if(validMoves.includes(square)){
        const move = game.move({
          from:selectedSquare,
          to:square
        })
       setGame(new Chess(game.fen()))
       setSelectedSquare(null)
       setValidMoves([])
      } else{
        setSelectedSquare(square)
        const move = game.move({
          square:square,
          verbose:true
        });
      }
      setValidMoves(moves.map((move) => move.to));
      
    } else {
      setSelectedSquare(square);
      const moves = game.moves({
        square: square,
        verbose: true,
      });

      setValidMoves(moves.map((move) => move.to));
    }
  };

  const getSquareStyle = (square) => {
    if (validMoves.includes(square)) {
      return 'bg-green-500';
    }
    return '';
  };

  return (
    <div>
    <Chessboard
      position={game.fen()}
      onSquareClick={handleSquareClick}
      boardWidth={720}
      squareStyles={{
        ...(validMoves.reduce(
          (acc, move) => ({
            ...acc,
            [move]: {
              backgroundColor: 'green',
            },
          }),
          {}
        ) || {}),
      }}
      customSquareStyles={(square) => getSquareStyle(square)}
    />
  </div>
  );
};

export default ChessUI;
