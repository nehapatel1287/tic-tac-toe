
import React from "react";
import Grid from "./Grid";
import "./App.css";

export default function App() {
  const [data, setData] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);
  const [turn, setTurn] = React.useState("cross");
  const [winner, setWinner] = React.useState(undefined);
  const winnerGrid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  //no more turns or winnning position

  let changeGrid = (index) => {
    if (!data[index] && !winner) {
      const newData = data;
      newData[index] = turn;
      setData([...newData]);

      winnerGrid.forEach((winner) => {
        const [x, y, z] = winner;
        if (data[x] && data[x] === data[y] && data[x] === data[z]) {
          setWinner(true);
        }
      });

      setTurn(turn === "cross" ? "circle" : "cross");
    }
  };

  return (
    <div className="App">
      <Grid turn={turn} data={data} winner={winner} setGrid={changeGrid} />
    </div>
  );
}
